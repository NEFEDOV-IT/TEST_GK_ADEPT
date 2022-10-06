import React, { FC } from 'react';
import { useAppDispatch } from "../../../hooks/hooks";
import './ButtonAdd.scss'
import { ICompany } from "../../../types/types";
import { addCompany } from "../../../store/companies.slice/companies.slice";

const ButtonAdd: FC = () => {
  const dispatch = useAppDispatch()
  const company: ICompany = {
    id: Date.now(),
    company: '',
    address: '',
    checked: false,
    workers: [],
  }

  const handleClick = () => {
    dispatch(addCompany(company))
  }

  return (
    <button
      onClick={handleClick}
      className='button-add'>
      Добавить компанию
    </button>
  );
};

export default ButtonAdd;