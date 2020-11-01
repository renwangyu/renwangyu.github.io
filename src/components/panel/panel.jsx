import React, { useRef, useEffect, useContext } from 'react';
import classnames from 'classnames';
import storeContext from 'src/redux/store';

function Panel(props) {
  const { children, className = '', show = false } = props;
  const { state, dispatch } = useContext(storeContext);

  const closeHandle = () => {
    dispatch({
      type: 'close-panel',
    });
  };

  return (
    <div
      className={classnames({
        'comp-panel': true,
        [className]: true,
        'hide': !show
      })}
      onClick={closeHandle}
    >
      <div onClick={e => e.stopPropagation()}>
        { children }
      </div>
    </div>
  )
}

export default Panel;
