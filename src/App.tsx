import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menus from "./components/organisms/Menus";
import Polestat from "./pages/Polestat";
import SignUp from "./pages/SignUp";
import { PATH } from "./shared/enums";

const App = () => {
  return (
    <BrowserRouter>
      <Menus />
      <Routes>
        <Route path={PATH.HOME} element={<Polestat />} />
        <Route path={PATH.MYPAGE} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
