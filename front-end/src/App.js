import Appartement from './component/Pharmasier/Pharmasier'
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import Login from './component/Auteltfcation/login'

import './App.css';

function App() {
  return (
    <div>
   
    <Routes>
   

<Route exact path="/" element={<Appartement/>} />
<Route exact path="/Login" element={<Login/>} />


</Routes>

<ToastContainer autoClose={200} />

</div>
  );
}

export default App;
