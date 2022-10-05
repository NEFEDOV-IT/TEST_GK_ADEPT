import React, { FC } from 'react';
import TableCheckbox from "../../TableChekbox/TableCheckbox";
import TableCell from "../../TableCell/TableCell";

const Company: FC<any> = ({ company }) => {
  return (
    <>
      <div className={company.checkBox ? 'companies__table-row row-active' : 'companies__table-row'}>
        <TableCheckbox
          item={company.checkBox}
          company={company}
        />
        <TableCell
          type={'text'}
          company={company}
          item={company.company}
        />
        <TableCell
          type={'text'}
          company={company}
          item={company.workers.length}
          readOnly={true}
        />
        <TableCell
          type={'text'}
          company={company}
          item={company.address}
        />
      </div>
    </>
  );
};

export default Company;