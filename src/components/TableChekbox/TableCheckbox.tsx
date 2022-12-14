import React, { FC, useState } from 'react';
import './TableCheckbox.scss'
import { useAppDispatch } from "../../hooks/hooks";
import { changeCompanyChecked, changeWorkerChecked } from "../../store/companies.slice/companies.slice";
import { IWorker } from "../../types/types";

interface IPropsCheckbox {
  item: any;
  company: {
    id: number;
    company: string;
    address: string;
    checked: boolean;
    workers: IWorker[];
    surname: string;
  }
}

const TableCheckbox: FC<IPropsCheckbox> = ({ item, company }) => {
  const dispatch = useAppDispatch()
  const [checked, setChecked] = useState(item);

  const handleChecked = () => {
    setChecked(!checked)
    if (company.surname) {
      dispatch(changeWorkerChecked(company.id))
    } else {
      dispatch(changeCompanyChecked(company.id))
    }
  }

  return (
    <div className="table-cell checkbox">
      <input
        onChange={handleChecked}
        checked={item}
        type="checkbox"
      />
    </div>
  );
};

export default TableCheckbox;