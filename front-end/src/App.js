import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Page/login";
import "./App.css";
import PrivateRouter from "./Router/PrivateRoute";
import Commantair from "./component/commantairs/DashCommant";
import NotFound from "./component/NotFound";
import Pharmasier from "./component/Pharmasier/Pharmasier";
import PageForgetPassword from "./Page/ForgetPassword";
import PageResetPassword from "./Page/PageResetPassword";
import LoginRoute from "./Router/LoginRoute";
function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route exact path="/pharmasier" element={<Pharmasier />} />
          <Route exact path="/commantair" element={<Commantair />} />
        </Route>
        <Route element={<LoginRoute />}>
          <Route exact path="/" element={<Login />} />
        </Route>
        <Route exact path="/forgetpassword" element={<PageForgetPassword />} />
        <Route path="/restpassword/:token" element={<PageResetPassword />} />

        <Route element={<NotFound />} path="*" />
      </Routes>
      <ToastContainer autoClose={200} />
    </>
  );
}
export default App;
