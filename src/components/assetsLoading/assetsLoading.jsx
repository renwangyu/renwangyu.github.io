import React, { useState, useEffect } from 'react';
import ProgressBar from '../progressBar';

function AssetsLoading(props) {
  const { value = 0 } = props;
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value);
  }, [value]);

  return (
    <div className="comp-assets-loading">
      <div className="loading-status-box">
        <p>{`${progress}%`}</p>
        <ProgressBar
          className=""
          value={progress}
          />
      </div>
    </div>
  );
}

export default AssetsLoading;
