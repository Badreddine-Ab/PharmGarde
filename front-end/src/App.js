
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD
import Login from "./Page/login";
=======
// import Login from "./Page/login";
>>>>>>> origin
import "./App.css";
import PrivateRouter from './Router/PrivateRoute'
import Commantair from './component/commantairs/DashCommant'
import NotFound from './component/NotFound'
import Pharmasier from "./component/Pharmasier/Pharmasier"; 
<<<<<<< HEAD
import PageForgetPassword from "./Page/ForgetPassword";
=======

>>>>>>> origin
function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route exact path="/" element={<Pharmasier />} />
          <Route exact path="/commantair" element={<Commantair />} />
        </Route>
<<<<<<< HEAD
        <Route exact path="/" element={<Login />} />
        <Route exact path="/forgetpassword" element={<PageForgetPassword />} />
=======
     
       
>>>>>>> origin
        <Route element={<NotFound />} path="*" />
      </Routes>
      <ToastContainer autoClose={200} />

    </>
  );
}

export default App;