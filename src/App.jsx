import { lazy, Suspense } from 'react';

import Loader from './components/Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const Home = () => lazy(() => import('./pages/Home'));

const Rates = () => lazy(() => import('./pages/Rates'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
