import React, { FC } from 'react';
import './ButtonDelete.scss'
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getCompanies } from "../../../selectors";
import { ICompany, IWorker } from "../../../types/types";
import { removeWorkers } from "../../../store/companies.slice/companies.slice";

const ButtonDelete: FC = () => {
  const companies = useAppSelector(getCompanies)
  const dispatch = useAppDispatch()
  const index = companies.findIndex((company: ICompany) => company.checked)
  const checkCompany = companies.filter((company: ICompany) => company.checked)

  const handleClick = () => {
    if (checkCompany.length === 0) return
    if (checkCompany.length > 1) {
      return alert('Выберите одну компанию для удаления сотрудников!')
    }

    if (index >= 0) {
      const isActiveWorkers = companies[index].workers.filter((worker: IWorker) => worker.checked)

      const obj = {
        id: companies[index].id,
        workers: isActiveWorkers,
      }
      dispatch(removeWorkers(obj))
    }
  }

  return (
    <button
      onClick={handleClick}
      className='button-delete'>
      Удалить сотрудника
    </button>
  );
};

export default ButtonDelete;