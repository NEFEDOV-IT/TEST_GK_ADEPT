import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import './ButtonAdd.scss'
import { ICompany, IWorker } from "../../../types/types";
import { addWorker } from "../../../store/companies.slice/companies.slice";
import { getCompanies } from "../../../selectors";

const ButtonAdd: FC = () => {
  const dispatch = useAppDispatch()
  const companies = useAppSelector(getCompanies)
  const index = companies.findIndex((company: ICompany) => company.checked)
  const checkCompany = companies.filter((company: ICompany) => company.checked)

  const handleClick = () => {
    if (checkCompany.length === 0) return
    if (checkCompany.length > 1) {
      return alert('Выберите одну компанию для добавления сотрудников!')
    }
    if (index >= 0) {
      const worker: IWorker = {
        id: Date.now(),
        surname: '',
        name: '',
        position: '',
        checked: false,
      }
      const obj = {
        worker: worker,
        id: companies[index].id,
      }
      dispatch(addWorker(obj))
    }
  }

  return (
    <button
      onClick={handleClick}
      className='button-add'>
      Добавить сотрудника
    </button>
  );
};

export default ButtonAdd;