
import { Navigate, Route, Routes } from 'react-router-dom'
import { PendingsRouter } from '../../pendings/routes/PendingsRouter'
import { NavBar } from '../components/NavBar'
import { DashboardPage } from '../pages/DashboardPage'

export const DashboardRouter = () => {
   return (
      <>
         <NavBar />
         <Routes>   
            <Route path="/" element={ <DashboardPage /> } />
            <Route path="pendings/*" element={ <PendingsRouter /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
         </Routes>
      </>
   )
}
