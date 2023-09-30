import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import StarFieldPage1 from './components/StarFieldPage1/StarFieldPage1';
import StarFieldPage2 from './components/StarFieldPage2/StarFieldPage2';
import LinkToPage from './components/Link/LinkToPage';
import { useState } from 'react';

function App() {
    const location = useLocation();
    const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <div className="App">
        <LinkToPage shouldAnimate={shouldAnimate}/>
        <Routes location={location} key={location.pathname}>
            <Route index element={ <StarFieldPage1 shouldAnimate={shouldAnimate} setShouldAnimate={setShouldAnimate}/> } />
            <Route path="/page2" element={ <StarFieldPage2 setShouldAnimate={setShouldAnimate}/> } />
        </Routes>
    </div>
  );
}

export default App;
