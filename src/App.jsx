import './App.css';
import Home from './Components/Home';
import Destination from './Components/Destination';
import { Routes, Route } from "react-router-dom"
import Crew from './Components/Crew';
import Technology from './Components/Technology';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} />
        <Route path='crew' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
