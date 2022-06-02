import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Observer from './pages/Obsever';
import Polestat from './pages/Polestat';
import { PATH } from './shared/enums';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<Polestat />} />
        <Route path={PATH.OBSERVER} element={<Observer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
