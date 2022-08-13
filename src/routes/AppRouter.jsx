import { Routes, Route } from 'react-router-dom';

import { AuthRouter } from '../auth/routes/AuthRouter';
import { DashboardPage } from '../dashboard/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRouter />} />
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
};
