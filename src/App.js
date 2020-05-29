import './App.scss';
import React, { useReducer, useEffect, useState } from 'react';
import classnames from 'classnames';
import storeContext, { initState as store } from './redux/store';
import reducer from './redux/reducer';
import Home from './pages/home';
import Sky from './pages/sky';
import Atmosphere from './pages/atmosphere';
import Universe from './pages/universe';
import Rocket from './components/rocket';
import Navbar from './components/navbar';
import AssetsLoading from './components/assetsLoading';

const { Provider } = storeContext;
let loadedNum = 0;
const r = require.context('src/assets', false, /\.(png|jpe?g|gif)$/);
const files = r.keys();
const total = files.length;

function App() {
  const [state, dispatch] = useReducer(reducer, store);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    files.map(file => {
      const m = r(file);
      const img = new Image();
      img.src = m;
      img.onload = () => {
        const currProgress = parseInt(++loadedNum / total * 100);
        setProgress(currProgress);
        if (loadedNum === total) {
          dispatch({
            type: 'ready',
          });
        }
      };
    })
  }, []);

  // const goHome = () => {
  //   dispatch({
  //     type: 'switch-stage',
  //     payload: 'home',
  //   });
  // };

  if (!state.ready) {
    return (
      <AssetsLoading value={progress} />
    );
  }

  return (
    <article className="stage">
      <Provider value={{ state, dispatch }}>
        <Navbar className="my-nav-bar" />
        <section className={classnames('my-story', state.stage)}>
          <Universe />
          <Atmosphere />
          <Sky />
          <Home />
          <Rocket className={classnames('my-rocket', `at-${state.stage}`)} />
        </section>
      </Provider>
      <a className="fork-me" href="https://github.com/renwangyu/renwangyu.github.io" target="_blank" rel="noopener noreferrer"></a>
      <div className="icp-beian">
        @2020&nbsp;&nbsp;|&nbsp;&nbsp;renwangyu&nbsp;&nbsp;|&nbsp;&nbsp;<a id="blog" href="https://blog.renwangyu.com/">个人空间</a>
        <div className="beian">
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702006227" rel="noopener noreferrer">
          沪公网安备 31010702006227号
          </a>&nbsp;&nbsp;沪ICP备20013153号
        </div>
        <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
      </div>
    </article>
  );
}

export default App;
