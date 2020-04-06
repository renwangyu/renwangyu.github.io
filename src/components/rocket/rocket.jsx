import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

function Rocket(props) {
  const { className } = props;
  const [outTank, setOutTank] = useState(false);
  const rocketClazz = classnames({
    'comp-rocket_body': true,
    ready: true,
    flight: false,
  });
  const astronautClazz = classnames({
    'comp-rocket_astronaut': true,
    'out-tank': outTank,
  });

  function clickRocket() {
    setOutTank(!outTank);
  }

  return (
    <div className={classnames('comp-rocket', className)}>
      <div className={astronautClazz}></div>
      <div
        onClick={clickRocket}
        className={rocketClazz}>
      </div>
    </div>
  )
}

export default Rocket;
