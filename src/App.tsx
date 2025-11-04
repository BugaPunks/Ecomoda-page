
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GeneralidadesPage from './pages/GeneralidadesPage';
import AnalisisDisenoPage from './pages/AnalisisDisenoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generalidades" element={<GeneralidadesPage />} />
        <Route path="/analisis-y-diseno" element={<AnalisisDisenoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

