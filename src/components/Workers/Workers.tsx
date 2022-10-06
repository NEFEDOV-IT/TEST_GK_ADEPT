import React, { FC } from 'react';
import Header from "./Header/Header";
import Worker from './Worker/Worker'
import { IWorker } from "../../types/types";
import SelectAll from "./SelectAll/SelectAll";
import ButtonDelete from "./ButtonDelete/ButtonDelete";
import ButtonAdd from "./ButtonAdd/ButtonAdd";

interface IWorkers {
  companies: IProps[];
}

interface IProps {
  id: number;
  surname: string;
  name: string;
  position: string;
  checked: boolean;
  workers: IWorker[]
  item: string,
}

const Workers: FC<IWorkers> = ({ companies }) => {
  return (
    <div className='workers__table'>
      <div className='table-buttons'>
        <SelectAll />
        <ButtonAdd />
        <ButtonDelete />
      </div>
      <Header />
      {companies?.map(company => {
        return (
          <div key={company.id}>
            {company.checked && company.workers.map(worker =>
              <Worker key={worker.id} worker={worker} />
            )}
          </div>
        )
      })}
    </div>
  );
};

export default Workers;