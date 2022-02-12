import React from 'react';
//import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home';
import GameCreate from './components/GameCreate';
import GameDetail from './components/GameDetail';


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route exact path='/' element={<LandingPage />} />
        <Route  path = '/home' element = {<Home/>}/>
        <Route  path = '/game' element = {<GameCreate/>}/>
        <Route exact path="/home/:id" element={<GameDetail/>} />
      </Routes>
    </div>

  );
}

export default App;
