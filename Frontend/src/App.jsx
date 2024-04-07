import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/UserProfile/Profile';

function App() {
 
  
  return (
    <>
     <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Profile" element={<Profile/>} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
