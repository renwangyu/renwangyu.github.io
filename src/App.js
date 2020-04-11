import './App.scss';
import React, { useReducer } from 'react';
import Home from './pages/home';
import Sky from './pages/sky';
import Universe from './pages/universe';
import Rocket from './components/rocket';
import Navbar from './components/navbar';
import storeContext, { initState as store } from './redux/store';
import reducer from './redux/reducer';



const { Provider } = storeContext;

function App() {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <article className="stage">
      <Provider value={{ state, dispatch }}>
        <Navbar className="my-nav-bar" />
        <section className={`my-story ${state.stage}`}>
          <Universe />
          <Sky />
          <Home />
          <Rocket className="my-rocket" />
        </section>
      </Provider>
    </article>
  );
}

export default App;
