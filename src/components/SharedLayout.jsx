import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = props => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

// SharedLayout.propTypes = {};

export default SharedLayout;
