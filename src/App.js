import React from 'react';
import './App.scss';
import Home from './pages/home';
import Universe from './pages/universe';

function App() {
  return (
    <div className="stage">
      <div className="my-story">
        <Universe />
        <Home />
      </div>
    </div>
  );
}

export default App;
