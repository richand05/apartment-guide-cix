import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage';
import Welcome from './pages/Welcome/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import BeforeTravel from './pages/BeforeTravel/BeforeTravel';
import Arriving from './pages/Arriving/Arriving';
import Wifi from './pages/Wifi/Wifi';
import Rules from './pages/Rules/Rules';
import Contact from './pages/Contact/Contact';
import Location from './pages/Location/Location';
import Department from './pages/Department/Department';


function App() {
  return (
    <div className='container-app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/before-travel" element={<BeforeTravel />} />
          <Route path="/arriving" element={<Arriving />} />
          <Route path="/internet" element={<Wifi />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/department" element={<Department />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
