import React, { FC } from 'react';
import TableCheckbox from "../../TableChekbox/TableCheckbox";
import TableCell from "../../TableCell/TableCell";
import './Company.scss'

const Company: FC<any> = ({ company }) => {
  return (
    <div className={company.checked ? 'companies__table-row row-active' : 'companies__table-row'}>
      <TableCheckbox
        item={company.checked}
        company={company}
      />
      <TableCell
        type={'text'}
        company={company}
        item={company.company}
      />
      <div className={'companies__size-workers'}>
        {company.workers.length}
      </div>
      <TableCell
        type={'text'}
        company={company}
        item={company.address}
      />
    </div>
  );
};

export default Company;