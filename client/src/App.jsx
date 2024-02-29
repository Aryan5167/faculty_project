import { useState } from 'react'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import StudentLand from './Pages/StudentLand'
import CheckAvailability from './Pages/CheckAvailability'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      {/* <Navbar /> */}
        <Route path="/register" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/student_dashboard" element={<StudentLand />}></Route>
        <Route path="/check-availaibility" element={<CheckAvailability />}></Route>
      </Routes>

    </BrowserRouter>
  )
}



export default App
