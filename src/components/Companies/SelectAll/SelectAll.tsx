import React, { FC } from 'react';
import './SelectAll.scss'
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getStatusCompanies } from "../../../selectors";
import { changeCompaniesStatus } from "../../../store/companies.slice/companies.slice";

const SelectAll: FC = () => {
  const statusCompanies = useAppSelector(getStatusCompanies)
  const dispatch = useAppDispatch()

  const handleChange = () => {
    if (statusCompanies) {
      dispatch(changeCompaniesStatus(false))
    } else dispatch(changeCompaniesStatus(true))
  }

  return (
    <div className='table-selectAll'>
      <input
        id='companies'
        onChange={handleChange}
        checked={statusCompanies}
        type='checkbox'
      />
      <label htmlFor='companies'>Выделить все</label>
    </div>
  );
};

export default SelectAll;