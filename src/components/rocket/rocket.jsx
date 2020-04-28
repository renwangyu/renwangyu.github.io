import React, { useContext, useRef, useEffect } from 'react';
import classnames from 'classnames';
import storeContext from 'src/redux/store';

const stageWeight = {
  home: 0,
  sky: 1,
  atmosphere: 2,
  universe: 3,
};
let pre = 'home';

function Rocket(props) {
  const { state, dispatch } = useContext(storeContext);
  const next = state.stage;
  const isHome = next === 'home';
  const rocketWrap = useRef();
  const rocketBody = useRef();
  const { className } = props;
  const rocketClazz = classnames({
    'comp-rocket_body': true,
    ready: isHome,
    flight: !isHome,
  });
  const homeClazz = classnames({
    'home-btn': true,
    'hide': isHome,
  });

  const goHome = () => {
    dispatch({
      type: 'switch-stage',
      payload: 'home',
    });
  };
  
  useEffect(() => {
    if (stageWeight[next] < stageWeight[pre]) {
      if (isHome) {
        rocketWrap.current.style.cssText = 'transition-duration:.5s;top:-410px';
        
        setTimeout(() => {
          rocketWrap.current.style.cssText = 'transition-duration:0s;top:400vh';
          setTimeout(() => {
            rocketWrap.current.style.cssText = '';
          }, 400);
        }, 600);
      }
      if (!isHome) {
        rocketBody.current.classList.add('down');
        setTimeout(() => {
          rocketBody.current.classList.remove('down');
        }, 1000);
      }
    }
    pre = next;
  }, [isHome, next]);
  
  return (
    <div
      ref={rocketWrap}
      className={classnames('comp-rocket', className)}>
      <div
        ref={rocketBody}
        className={rocketClazz}>
        <div
          className={homeClazz}
          onClick={goHome}
          >
        </div>
      </div>
    </div>
  )
}

export default Rocket;
