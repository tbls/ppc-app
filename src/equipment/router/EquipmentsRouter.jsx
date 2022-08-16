import { Navigate, Route, Routes } from 'react-router-dom';
import { EquipmentsPage } from '../pages/EquipmentsPage';

export const EquipmentsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<EquipmentsPage />} />
      <Route path="/*" element={<Navigate to="/equipments" />} />
    </Routes>
  );
};
