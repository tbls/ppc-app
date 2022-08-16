import { Navigate, Route, Routes } from 'react-router-dom';
import { LeakPage } from '../pages/LeaksPage';

export const LeaksRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LeakPage />} />
      <Route path="/*" element={<Navigate to="/leaks" />} />
    </Routes>
  );
};
