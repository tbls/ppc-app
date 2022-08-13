import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';



export const SuraApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
