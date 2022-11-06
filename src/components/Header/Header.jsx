import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.headerList}>
          <li className={style.headerItem}>
            <NavLink className={style.headerNav} to="/" end>
              <b>Home</b>
            </NavLink>
          </li>
          <li className={style.headerItem}>
            <NavLink className={style.headerNav} to="/movies">
              <b>Movies</b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
