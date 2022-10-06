import { createSlice } from "@reduxjs/toolkit";
import { ICompany, IWorker, RootState } from "../../types/types";
import { state } from "./dataCompanies";

const initialState: RootState = state;

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    changeWorkerChecked(state, action) {
      state.companies.map(
        company =>
          company.workers.map(
            worker =>
              worker.id === action.payload ?
                worker.checked = !worker.checked : worker.checked
          )
      )
    },
    changeCompanyChecked(state, action) {
      state.companies.map(
        company => company.id === action.payload ?
          company.checked = !company.checked : company.checked
      )
    },
    changeCompanyName(state, action) {
      const index = state.companies.findIndex(company => company.id === action.payload.id)
      state.companies[index].company = action.payload.company
    },
    changeWorkerSurname(state, action) {
      state.companies.map(
        company =>
          company.workers.map(
            worker =>
              worker.id === action.payload.id ?
                worker.surname = action.payload.surname : worker.surname
          )
      )
    },
    changeWorkerPosition(state, action) {
      state.companies.map(
        company =>
          company.workers.map(
            worker =>
              worker.id === action.payload.id ?
                worker.position = action.payload.position : worker.position
          )
      )
    },
    changeWorkerName(state, action) {
      state.companies.map(
        company =>
          company.workers.map(
            worker =>
              worker.id === action.payload.id ?
                worker.name = action.payload.name : worker.name
          )
      )
    },
    changeCompanyAddress(state, action) {
      const index = state.companies.findIndex(company => company.id === action.payload.id)
      state.companies[index].address = action.payload.address
    },
    changeCompaniesStatus(state, action) {
      state.companies.map(
        company => company.checked = action.payload
      )
      state.statusCompanies = action.payload
    },
    changeWorkerStatus(state, action) {
      state.companies.map(
        company =>
          company.workers.map(
            worker => worker.checked = action.payload
          )
      )
      state.statusWorkers = action.payload
    },
    removeCompanies(state, action) {
      const index = action.payload.map((company: ICompany) => company.id)
      state.companies = state.companies.filter(company => !index.includes(company.id))
    },
    removeWorkers(state, action) {
      const index = state.companies.findIndex((company: ICompany) => company.id === action.payload.id)
      const workersId = action.payload.workers.map((worker: IWorker) => worker.id)
      state.companies[index].workers = state.companies[index].workers.filter(worker => !workersId.includes(worker.id))
    },
    addCompany(state, action) {
      state.companies.unshift(action.payload)
    },
    addWorker(state, action) {
      const index = state.companies.findIndex((company: ICompany) => company.id === action.payload.id)
      state.companies[index].workers.unshift(action.payload.worker)
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