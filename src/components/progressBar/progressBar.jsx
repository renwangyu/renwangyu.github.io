import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

function ProgressBar(props) {
  const { value, className } = props;
  const clazz = classnames('comp-progress-bar', className);
  const [schedule, setSchedule] = useState(value);

  useEffect(() => {
    setSchedule(value);
  }, [value]);

  return (
    <section className={clazz}>
      <div className="comp-progress-bar-wrapper">
        <div
          className="comp-progress-bar-cloth"
          style={{ width: `${schedule}%` }}
          >
        </div>
      </div>
    </section>
  )
}

export default ProgressBar;
