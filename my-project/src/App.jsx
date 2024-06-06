import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About_Page/About'
import Home from './Page/Home'
import { useRef, useState } from 'react';
// import { Navbar } from 'react-bootstrap';
// import Navbar from './Page/Navbar';
// import Dropdown1 from './Drop';


function App() {


  return (
    <>
    {/* <Navbar/> */}
    {/* <Dropdown1/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Sign_in/> */}
      {/* <Navbar/> */}
    </>
  )
}

export default App
