import React, { FC } from 'react';
import TableCheckbox from "../../TableChekbox/TableCheckbox";
import TableCell from "../../TableCell/TableCell";
import './Worker.scss'

const Worker: FC<any> = ({ worker }) => {
  return (
    <div className={worker.checkBox ? 'worker__table-row row-active' : 'worker__table-row'}
         key={worker.id}>
      <TableCheckbox
        item={worker.checkBox}
        company={worker}
      />
      <TableCell
        type={'text'}
        company={worker}
        item={worker.surname}
      />
      <TableCell
        type={'text'}
        company={worker}
        item={worker.name}
      />
      <TableCell
        type={'text'}
        company={worker}
        item={worker.position}
      />
    </div>
  );
};

export default Worker;