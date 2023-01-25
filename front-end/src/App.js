import Appartement from "./component/Pharmasier/Pharmasier";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./component/Auteltfcation/login";
import "./App.css";
import PrivateRouter from './Router/PrivateRoute'

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route exact path="/appartement" element={<Appartement />} />
        </Route>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <ToastContainer autoClose={200} />
    </>
  );
}

export default App;
