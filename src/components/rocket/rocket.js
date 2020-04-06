import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

function Rocket(props) {
  const { className } = props;
  const clazz = classnames({
    'comp-rocket_body': true,
    'ready': true,
  })

  return (
    <div className={classnames('comp-rocket', className)}>
      <div className={clazz}></div>
    </div>
  )
}

export default Rocket;
