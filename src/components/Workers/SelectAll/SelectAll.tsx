import React, { FC } from 'react';
import './SelectAll.scss'
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getStatusWorkers } from "../../../selectors";
import { changeWorkerStatus } from "../../../store/companies.slice/companies.slice";

const SelectAll: FC = () => {
  const statusWorkers = useAppSelector(getStatusWorkers)
  const dispatch = useAppDispatch()

  const handleChange = () => {
    if (statusWorkers) {
      dispatch(changeWorkerStatus(false))
    } else dispatch(changeWorkerStatus(true))
  }

  return (
    <div className='table-selectAll'>
      <input
        id='workers'
        onChange={handleChange}
        checked={statusWorkers}
        type='checkbox'
      />
      <label htmlFor='workers'>Выделить все</label>
    </div>
  );
};

export default SelectAll;