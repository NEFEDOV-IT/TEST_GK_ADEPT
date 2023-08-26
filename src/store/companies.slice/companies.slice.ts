import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompany, IWorker, IInitialState } from "../../types/types";
import { state } from "../../mock/dataCompanies";

const initialState: IInitialState = state;

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    changeWorkerChecked(state, action: PayloadAction<number>) {
      state.companies.forEach(company =>
        company.workers.forEach(worker => {
            if (worker.id === action.payload) {
              worker.checked = !worker.checked
            }
          }
        )
      )
    },
    changeCompanyChecked(state, action: PayloadAction<number>) {
      state.companies.forEach(company => {
          if (company.id === action.payload) {
            company.checked = !company.checked
          }
        }
      )
    },
    changeCompanyName(state, action: PayloadAction<{ id: number; company: string }>) {
      const companyIndex = state.companies.findIndex(company => company.id === action.payload.id)
      if (companyIndex !== -1) {
        state.companies[companyIndex].company = action.payload.company;
      }
    },
    changeWorkerSurname(state, action: PayloadAction<{ id: number; surname: string }>) {
      state.companies.forEach(company =>
        company.workers.forEach(worker => {
            if (worker.id === action.payload.id) {
              worker.surname = action.payload.surname;
            }
          }
        )
      )
    },
    changeWorkerPosition(state, action: PayloadAction<{ id: number; position: string }>) {
      state.companies.forEach(company =>
        company.workers.forEach(worker => {
            if (worker.id === action.payload.id) {
              worker.position = action.payload.position;
            }
          }
        )
      )
    },
    changeWorkerName(state, action: PayloadAction<{ id: number; name: string }>) {
      state.companies.forEach(company =>
        company.workers.forEach(worker => {
            if (worker.id === action.payload.id) {
              worker.name = action.payload.name;
            }
          }
        )
      )
    },
    changeCompanyAddress(state, action: PayloadAction<{ id: number; address: string }>) {
      const companyIndex = state.companies.findIndex(company => company.id === action.payload.id)
      if (companyIndex !== -1) {
        state.companies[companyIndex].address = action.payload.address;
      }
    },
    changeCompaniesStatus(state, action: PayloadAction<boolean>) {
      state.companies.forEach(company => company.checked = action.payload)
      state.statusCompanies = action.payload
    },
    changeWorkerStatus(state, action: PayloadAction<boolean>) {
      state.companies.forEach(company =>
          company.workers.forEach(worker => worker.checked = action.payload)
      )
      state.statusWorkers = action.payload
    },
    removeCompanies(state, action: PayloadAction<ICompany[]>) {
      const companyIdsToRemove = action.payload.map((company: ICompany) => company.id)
      state.companies = state.companies.filter(company => !companyIdsToRemove.includes(company.id))
    },
    removeWorkers(state, action: PayloadAction<{ id: number; workers: IWorker[] }>) {
      const companyIndex = state.companies.findIndex((company: ICompany) => company.id === action.payload.id)
      if (companyIndex !== -1) {
        const workersIdsToRemove = action.payload.workers.map((worker) => worker.id);
        state.companies[companyIndex].workers = state.companies[companyIndex].workers.filter(
          (worker) => !workersIdsToRemove.includes(worker.id)
        );
      }
    },
    addCompany(state, action: PayloadAction<ICompany>) {
      state.companies.unshift(action.payload)
    },
    addWorker(state, action: PayloadAction<{ id: number; worker: IWorker }>) {
      const companyIndex = state.companies.findIndex((company) => company.id === action.payload.id);
      if (companyIndex !== -1) {
        state.companies[companyIndex].workers.unshift(action.payload.worker);
      }
    },

  }
})

export const companiesReducer = companiesSlice.reducer
export const {
  changeCompanyChecked,
  changeWorkerName,
  changeWorkerPosition,
  changeWorkerChecked,
  changeWorkerSurname,
  changeCompanyName,
  changeCompanyAddress,
  changeCompaniesStatus,
  changeWorkerStatus,
  removeCompanies,
  removeWorkers,
  addCompany,
  addWorker
} = companiesSlice.actions
