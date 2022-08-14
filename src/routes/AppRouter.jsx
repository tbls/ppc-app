import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRouter } from '../auth/routes/AuthRouter';
import { DashboardPage } from '../dashboard/pages';

export const AppRouter = () => {
  const { isLogged } = useSelector((state) => state.auth);
  console.log(isLogged);
  return (
    <Routes>
      {isLogged ? (
        <Route path="/*" element={<DashboardPage />} />
      ) : (
        <Route path="auth/*" element={<AuthRouter />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
