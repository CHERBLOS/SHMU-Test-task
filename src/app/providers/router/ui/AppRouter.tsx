import {
  memo, Suspense, useCallback,
} from 'react';
import { Routes, Route, type RouteProps } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { routeConfig } from '../config/routerConfig';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<Loader />}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
});