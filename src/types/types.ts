export interface IWorker {
  id: number;
  surname: string;
  name: string;
  position: string;
  checked: boolean | undefined;
}

export interface ICompany {
  id: number;
  company: string;
  address: string;
  checked: boolean | undefined;
  workers: IWorker[];
}

export interface IInitialState {
  statusCompanies: Boolean;
  statusWorkers: Boolean;
  companies: ICompany[];
}


