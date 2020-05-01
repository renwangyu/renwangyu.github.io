import React, { useEffect } from 'react';
import Experience from 'src/components/experience';
import earth from 'src/three/earth';

function Atmosphere(props) {

  useEffect(() => {
    earth();
  }, []);

  return (
    <article className="page-atmosphere">
      <div className="black-cloud"></div>
      <div className="work-box">
        <div className="work-bar"></div>
        <div className="black-board">
          <Experience />
        </div>
      </div>
      <div id="earth"></div>
      <div className="space-ship"></div>
    </article>
  )
}

export default Atmosphere;
