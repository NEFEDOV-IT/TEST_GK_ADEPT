import React, { FC } from 'react';
import Header from "./Header/Header";
import Company from "./Company/Company";
import { ICompany } from "../../types/types";

interface ICompanies {
  companies: ICompany[];
}

const Companies: FC<ICompanies> = ({companies}) => {
  return (
    <div className='companies__table'>

      <Header />
      {companies?.map((company: ICompany) => {
        return <Company company={company} key={company.id}/>;
      })}
    </div>
  );
};

export default Companies;