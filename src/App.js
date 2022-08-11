import './App.css';
import { Route,Routes } from 'react-router-dom';
import Logged from './components/context';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import { useState } from 'react';
import React from 'react'
import ResetPassword from './components/views/ResetPassword/ResetPassword';
import StudentSection from './components/views/Student Section/StudentSection';

const App = () => {
  const [logged, setlogged] = useState(false); //for checking if user is logged in
  return (
    <>
    <Logged.Provider value={{ value: logged, setter: setlogged }}>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reset" element={<ResetPassword/>} />
        <Route exact path="/student-section" element={<StudentSection/>} />
      </Routes>
    </Logged.Provider>
    </>
  )
}

export default App
