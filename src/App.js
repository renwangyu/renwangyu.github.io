import React from 'react';
import './App.scss';
import Home from './pages/home';
import Sky from './pages/sky';
import Universe from './pages/universe';
import Rocket from './components/rocket';
import Navbar from './components/navbar';

function App() {
  return (
    <article className="stage">
      <Navbar className="my-nav-bar" />
      <section className="my-story">
        <Universe />
        <Sky />
        <Home />
        <Rocket className="my-rocket" />>
      </section>
    </article>
  );
}

export default App;
