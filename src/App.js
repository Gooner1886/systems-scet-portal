import './App.css';
import { Route,Routes } from 'react-router-dom';

import LandingPage from './components/views/LandingPage';

import React from 'react'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
      </Routes>
    </>
    
  )
}

export default App
