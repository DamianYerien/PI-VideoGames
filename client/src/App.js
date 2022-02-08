import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route exact path='/' element={<LandingPage />} />
        <Route  path = '/home' element = {<Home/>}/>
      </Routes>
    </div>

  );
}

export default App;
