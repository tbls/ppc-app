import { Navigate, Route, Routes } from 'react-router-dom';
import { EquipmentPage } from '../pages/EquipmentPage';

export const EquipmentsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<EquipmentPage />} />
      <Route path="/*" element={<Navigate to="/equipments" />} />
    </Routes>
  );
};
