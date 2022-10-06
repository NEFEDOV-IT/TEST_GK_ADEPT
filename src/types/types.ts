export interface IWorker {
  id: number;
  surname: string;
  name: string;
  position: string;
  checked: boolean;
}

export interface ICompany {
  id: number;
  company: string;
  address: string;
  checked: boolean;
  workers: IWorker[];
}

export interface RootState {
  statusCompanies: Boolean;
  statusWorkers: Boolean;
  companies: ICompany[];
}


