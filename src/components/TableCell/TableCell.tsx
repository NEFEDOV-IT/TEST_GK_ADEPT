import React, { FC, useState, ChangeEvent } from 'react';
import './TableCell.scss'
import { useAppDispatch } from "../../hooks/hooks";
import {
  changeCompanyAddress,
  changeCompanyName, changeWorkerName,
  changeWorkerPosition,
  changeWorkerSurname
} from "../../store/companies.slice/companies.slice";

interface ITableCell<T> {
  item: string | number,
  company: T,
  type: string,
}

const TableCell: FC<ITableCell<any>> = ({ item, company, type }) => {
  const [state, setState] = useState<string | number>(item);
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)

    switch (item) {
      case company.company:
        dispatch(changeCompanyName({
          id: company.id,
          company: e.target.value,
        }))
        break;
      case company.position:
        dispatch(changeWorkerPosition({
          id: company.id,
          position: e.target.value,
        }))
        break;
      case company.name:
        dispatch(changeWorkerName({
          id: company.id,
          name: e.target.value,
        }))
        break;
      case company.surname:
        dispatch(changeWorkerSurname({
          id: company.id,
          surname: e.target.value,
        }))
        break;
      case company.address:
        dispatch(changeCompanyAddress({
          id: company.id,
          address: e.target.value,
        }))
        break;
      default:
        break;
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
