import React, { FC, useState, ChangeEvent } from 'react';
import './TableCell.scss'
import { useAppDispatch } from "../../hooks/hooks";
import {
  changeCompanyAddress,
  changeCompanyName, changeWorkerName,
  changeWorkerPosition,
  changeWorkerSurname
} from "../../store/companies.slice/companies.slice";
import { IWorker } from "../../types/types";

interface ICompanyProps {
  company: string,
  id: number,
  position: string,
  name: string,
  surname: string,
  address: string,
  workers: IWorker[],
}

interface ITableCell {
  item: string | number,
  company: ICompanyProps,
  type: string,
}

const TableCell: FC<ITableCell> = ({ item, company, type }) => {
  const [state, setState] = useState<string | number>(item);
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)

    if (item === company.company) {
      dispatch(changeCompanyName({
        id: company.id,
        company: e.target.value,
      }))
    }

    if (item === company.position) {
      dispatch(changeWorkerPosition({
        id: company.id,
        position: e.target.value,
      }))
    }

    if (item === company.name) {
      dispatch(changeWorkerName({
        id: company.id,
        name: e.target.value,
      }))
    }

    if (item === company.surname) {
      dispatch(changeWorkerSurname({
        id: company.id,
        surname: e.target.value,
      }))
    }

    if (item === company.address) {
      dispatch(changeCompanyAddress({
        id: company.id,
        address: e.target.value,
      }))
    }
  }

  return (
    <div className="table-cell">
      <input
        value={state}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default TableCell;