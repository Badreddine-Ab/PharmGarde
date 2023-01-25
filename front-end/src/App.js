import Appartement from "./component/Pharmasier/Pharmasier";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./component/Authentification/login";
import "./App.css";
import PrivateRouter from './Router/PrivateRoute'
import NotFound from './component/NotFound'
import Pharmasier from "./component/Pharmasier/Pharmasier"; 
function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route exact path="/pharmasier" element={<Pharmasier />} />
        </Route>
        <Route exact path="/" element={<Login />} />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <ToastContainer autoClose={200} />

    </>
  );
}

export default App;
