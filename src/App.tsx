import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Polestat from './pages/Polestat';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Polestat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
