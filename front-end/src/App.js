import logo from './logo.svg';
import Dash from './component/dash'
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>

<Route exact path="/dash" element={<Dash/>} />

</Routes>
    </div>
  );
}

export default App;
