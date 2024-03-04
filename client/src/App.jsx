import { useState } from 'react'
import SignupU from './SignupU'
import SignupF from './SignupF'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginU from './LoginU'
import LoginF from './LoginF'
import Home from './Home'
import StudentLand from './Pages/StudentLand'
import FacultyLand from './Pages/FacultyLand'

import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import CheckAvailability from './Pages/CheckAvailability'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} ></Route>
        <Route path="/register" element={<SignupU/>} ></Route>
        <Route path="/registerF" element={<SignupF />} ></Route>
        <Route path="/loginU" element={<LoginU />} ></Route>
        <Route path="/loginF" element={<LoginF />} ></Route>
      <Route path="/student_dashboard" element={<StudentLand />}></Route>
      <Route path="/faculty_dashboard" element={<FacultyLand />}></Route>
      <Route path="/check_availability" element={<CheckAvailability />}></Route>
    
      </Routes>
  <Footer />
    </BrowserRouter>
  )
}



export default App
