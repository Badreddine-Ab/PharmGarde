import Appartement from './component/Appartement/Pharmasier'
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';

import './App.css';

function App() {
  return (
    <div>
   
    <Routes>
   

<Route exact path="/" element={<Appartement/>} />


</Routes>

<ToastContainer autoClose={200} />

</div>
  );
}

export default App;
