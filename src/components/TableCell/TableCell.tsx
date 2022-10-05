import React, { FC, useState, ChangeEvent } from 'react';
import './TableCell.scss'
import { useAppDispatch } from "../../hooks/hooks";
import {
  changeAddress,
  changeCompanyName, changeWorkerName,
  changeWorkerPosition,
  changeWorkerSurname
} from "../../store/companies.slice/companies.slice";

interface ICompanyProps {
  company: string,
  id: number,
  position: string,
  name: string,
  surname: string,
  address: string
}

interface ITableCell {
  item: string,
  company: ICompanyProps,
  type: string,
  readOnly?: any,
}

const TableCell: FC<ITableCell> = ({ item, company, type, readOnly }) => {
  const [state, setState] = useState<string>(item);
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
      dispatch(changeAddress({
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
        readOnly={readOnly}
      />
    </div>
  );
};

export default TableCell;