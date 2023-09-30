import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import StarFieldPage1 from './components/StarFieldPage1/StarFieldPage1';
import StarFieldPage2 from './components/StarFieldPage2/StarFieldPage2';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <StarFieldPage1/> } />
          <Route path="/page2" element={ <StarFieldPage2/> } />
        </Routes>
    </div>
  );
}

export default App;
