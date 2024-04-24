import "./App.css";
import Home from './pages/About';
import About from './pages/Home';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from "./pages/Register/Register";
 
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />  
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />  
 
 
          </Routes>
        </div>
       
      </BrowserRouter>
    </div>
  );  
 
}
 
 
export default App;