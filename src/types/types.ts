export interface IWorker {
  id: number;
  surname: string;
  name: string;
  position: string;
  checkBox: boolean;
}

export interface ICompany {
  id: number;
  company: string;
  address: string;
  checkBox: boolean;
  workers: IWorker[];
}


