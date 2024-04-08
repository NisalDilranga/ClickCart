import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/UserProfile/Profile';
import SendEmail from './Components/FroggetPass/SendEmail';
import RePassword from './Components/FroggetPass/RePassword';
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
          <Route path="/reset-password" element={<SendEmail/>} />
          <Route path="/reset-pass" element={<RePassword/>} />
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
