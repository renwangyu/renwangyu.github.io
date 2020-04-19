import React from 'react';
import Experience from 'src/components/experience';

function Atmosphere(props) {
  return (
    <article className="page-atmosphere">
      <div className="black-cloud"></div>
      <div className="work-box">
        <div className="work-bar"></div>
        <div className="black-board">
          <Experience />
        </div>
      </div>
      <div className="tech-penguin"></div>
    </article>
  )
}

export default Atmosphere;
