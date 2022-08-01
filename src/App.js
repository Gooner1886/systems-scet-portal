import './App.css';
import { Route,Routes } from 'react-router-dom';

import LandingPage from './components/views/LandingPage';
import Login from './Pages/Login';

import React from 'react'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
    
  )
}

export default App
