import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './componenta/login/loginComponent.jsx'
import Register from './componenta/register/registerComponent.jsx'
import Nav from "./componenta/navbar/navComponent.jsx";
import Home from "./componenta/home/homeComponent.jsx";
import Add from "./componenta/blog/blogComponent.jsx";

function App() {
  return (
    <div className="hero">
<Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </div>
  )
}

export default App