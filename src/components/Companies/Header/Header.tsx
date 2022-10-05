import React from 'react';

const Header = () => {
  return (
    <>
      <div className="companies__table-row table__row-header">
        <div className="table-cell checkbox">Чекбокс</div>
        <div className="table-cell">Название компании</div>
        <div className="table-cell">Кол-во сотрудников</div>
        <div className="table-cell">Адрес</div>
      </div>
    </>
  );
};

export default Header;