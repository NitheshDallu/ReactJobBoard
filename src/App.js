// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderDetails from './components/Header/HeaderDetails';
import Home from './components/Header/Home';
import AboutUs from './components/Header/AboutUs';
import ContactUs from './components/Header/ContactUs';
import JobList from './components/Header/JobList';

function App() {
  return (
    <Router>
      <HeaderDetails />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/jobList" element={<JobList />} /> {/* Updated path for JobList */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
