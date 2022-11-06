import React, { Suspense } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';

const SharedLayout = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
