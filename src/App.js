import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Aboutus from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (
    <BrowserRouter>
    
      
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        
          

      


        <Route path="/about" element={<Aboutus/>}/>
          

        


        <Route path="/contact" element={<Contact />}/>
          
        

        
      </Routes>
      <Footer/>
    
    </BrowserRouter>

  );
}

export default App;
