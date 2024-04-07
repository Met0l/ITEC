import React from 'react';
import  Navbar from './components/BaraNavigare'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Education from './components/pages/Education';
import News from './components/pages/News';
// import Media from './components/pages/Media';
import Extracur from './components/pages/Extracur';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/educatie' element={<Education/>} />
          <Route path='/noutati' element={<News/>} />
          {/* <Route path='/media' element={<Media/>} /> */}
          <Route path='/extracurriculare' element={<Extracur/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
