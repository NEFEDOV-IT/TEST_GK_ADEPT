import React, { FC } from 'react';
import './ButtonDelete.scss'
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getCompanies } from "../../../selectors";
import { ICompany } from "../../../types/types";
import { removeCompanies } from "../../../store/companies.slice/companies.slice";

const ButtonDelete: FC = () => {
  const companies = useAppSelector(getCompanies)
  const dispatch = useAppDispatch()
  const isActiveChecked: ICompany[] = companies.filter((item: ICompany) => item.checked)

  const handleClick = () => {
    if (isActiveChecked.length > 0) {
      dispatch(removeCompanies(isActiveChecked))
    }
  }

  return (
    <button
      onClick={handleClick}
      className='button-delete'>
      Удалить компанию
    </button>
  );
};

export default ButtonDelete;
