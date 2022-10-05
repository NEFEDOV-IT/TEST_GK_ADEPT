import React, { FC } from 'react';
import { useAppSelector } from "../../hooks/hooks";
import { getCompanies } from "../../selectors";
import './Tables.scss'
import Companies from "../Companies/Companies";
import Workers from "../Workers/Workers";

const Tables: FC = () => {
  const companies = useAppSelector(getCompanies)

  return (
    <div className='wrapper'>
      <Companies companies={companies}/>
      <Workers companies={companies}/>
    </div>
  );
};

export default Tables;