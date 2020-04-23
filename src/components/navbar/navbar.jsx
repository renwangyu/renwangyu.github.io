import React, { useRef, useEffect, useContext } from 'react';
import classnames from 'classnames';
import storeContext from 'src/redux/store';

const isZH = (navigator.language || navigator.userLanguage).substr(0, 2).toLowerCase() === 'zh';

function Navbar(props) {
  const { className } = props;
  const { state, dispatch } = useContext(storeContext);

  const jump = (stageName) => {
    return () => {
      dispatch({
        type: 'switch-stage',
        payload: stageName,
      });
    }
  };

  return (
    <article className={classnames('comp-navbar', className)}>
      <div
        className="comp-navbar_aboutme"
        onClick={jump('sky')}
        >
        { isZH ? '自我介绍' : 'About me' }
      </div>

      <div
        className="comp-navbar_works"
        onClick={jump('atmosphere')}
        >
        { isZH ? '工作经历' : 'Works' }
      </div>

      <div
        className="comp-navbar_contact"
        onClick={jump('universe')}
        >
        { isZH ? '交个朋友' : 'Contact' }
      </div>
    </article>
  );
}

export default Navbar;
