import React from 'react';
import './App.scss';
import Home from './pages/home';
import Sky from './pages/sky';
import Universe from './pages/universe';

function App() {
  return (
    <div className="stage">
      <div className="my-story">
        <Universe />
        <Sky />
        <Home />
      </div>
    </div>
  );
}

export default App;
