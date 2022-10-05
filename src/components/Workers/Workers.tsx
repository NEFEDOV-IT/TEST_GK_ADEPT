import React, { FC } from 'react';
import Header from "./Header/Header";
import Worker from './Worker/Worker'
import { IWorker } from "../../types/types";

interface IWorkers {
  companies: IProps[];
}

interface IProps {
  id: number;
  surname: string;
  name: string;
  position: string;
  checkBox: boolean;
  workers: IWorker[]
}

const Workers: FC<IWorkers> = ({ companies }) => {
  return (
    <div className="workers__table">
      <Header />

      {companies?.map(company => {
        return (
          <div key={company.id}>
            {company.checkBox && company.workers.map(worker =>
              <Worker key={worker.id} worker={worker} />
            )}
          </div>
        )
      })}
    </div>
  );
};

export default Workers;