import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <>
      <div className="worker__table-row worker__row-header">
        <div className="worker__table-cell worker__checkbox">Чекбокс</div>
        <div className="worker__table-cell">Фамилия</div>
        <div className="worker__table-cell">Имя</div>
        <div className="worker__table-cell">Должность</div>
      </div>
    </>
  );
};

export default Header;
