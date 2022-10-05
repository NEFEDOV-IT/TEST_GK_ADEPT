import { createSlice } from "@reduxjs/toolkit";
import { companies } from "../dataCompanies";
import { ICompany } from "../../types/types";

const initialState: ICompany[] = companies;

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    changeWorkerChecked(state, action) {
      state.map(
        company =>
          company.workers.map(
            worker =>
              worker.id === action.payload ?
                worker.checkBox = !worker.checkBox : worker.checkBox
          )
      )
    },
    changeCompanyChecked(state, action) {
      state.map(
        company => company.id === action.payload ?
          company.checkBox = !company.checkBox : company.checkBox
      )
    },
    changeCompanyName(state, action) {
      const index = state.findIndex(company => company.id === action.payload.id)
      state[index].company = action.payload.company
    },
    changeWorkerSurname(state, action) {
      state.map(
        company =>
          company.workers.map(
            worker =>
              worker.id === action.payload.id ?
                worker.surname = action.payload.surname : worker.surname
          )
      )
    },
    changeWorkerPosition(state, action) {
      state.map(
        company =>
          company.workers.map(
            worker =>
              worker.id === action.payload.id ?
                worker.position = action.payload.position : worker.position
          )
      )
    },
    changeWorkerName(state, action) {
      state.map(
        company =>
          company.workers.map(
            worker =>
              worker.id === action.payload.id ?
                worker.name = action.payload.name : worker.name
          )
      )
    },
    changeAddress(state, action) {
      const index = state.findIndex(company => company.id === action.payload.id)
      state[index].address = action.payload.address
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
  changeAddress
} = companiesSlice.actions