import logo from './logo.svg';
import './App.css';
import HeaderDetails from './components/Header/HeaderDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Header/Home';
import AboutUs from './components/Header/AboutUs';
import ContactUs from './components/Header/ContactUs';

function App() {
  return (
    <Router>
    <HeaderDetails />
    <div>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
