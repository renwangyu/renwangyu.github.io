import React from 'react';
import './App.scss';
import Home from './pages/home';
import Sky from './pages/sky';
import Universe from './pages/universe';
import Rocket from './components/rocket';

function App() {
  return (
    <div className="stage">
      <div className="my-story">
        <Universe />
        <Sky />
        <Home />
        <Rocket className="my-rocket" />>
      </div>
    </div>
  );
}

export default App;
