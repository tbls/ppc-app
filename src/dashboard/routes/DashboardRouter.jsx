import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EquipmentsRouter } from '../../equipment/router/EquipmentsRouter';
import { LeaksRouter } from '../../leaks/routes/LeaksRouter';
import { PendingsRouter } from '../../pendings/routes/PendingsRouter';
import { NavBar } from '../components/NavBar';
import { DashboardPage } from '../pages/DashboardPage';

export const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="leaks/*" element={<LeaksRouter />} />
          <Route path="pendings/*" element={<PendingsRouter />} />
          <Route path="equipments/*" element={<EquipmentsRouter />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};
