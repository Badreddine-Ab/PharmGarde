import Appartement from './component/Pharmasier/Pharmasier'
import Commantair from './component/commantairs/DashCommant'
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
<Route exact path="/commantair" element={<Commantair/>} />


</Routes>

<ToastContainer autoClose={200} />

</div>
  );
}

export default App;
