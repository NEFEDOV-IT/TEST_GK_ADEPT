import React, { FC } from 'react';
import Header from "./Header/Header";
import Company from "./Company/Company";
import { ICompany } from "../../types/types";
import SelectAll from "./SelectAll/SelectAll";
import ButtonDelete from "./ButtonDelete/ButtonDelete";
import './Companies.scss'
import ButtonAdd from "./ButtonAdd/ButtonAdd";

interface ICompanies {
  companies: ICompany[],
}

const Companies: FC<ICompanies> = ({ companies }) => {
  return (
    <div className='companies__table'>
      <div className={'table-buttons'}>
        <SelectAll />
        <ButtonAdd />
        <ButtonDelete />
      </div>
      <Header />
      {companies.map((company: ICompany) => {
        return <Company company={company} key={company.id} />;
      })}
    </div>
  );
};

export default Companies;