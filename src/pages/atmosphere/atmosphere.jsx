import React from 'react';
import Experience from 'src/components/experience';

function Atmosphere(props) {
  return (
    <article className="page-atmosphere">
      <div className="black-cloud"></div>
      <div className="work-bar"></div>
      <Experience
        className="show-box"
        />
    </article>
  )
}

export default Atmosphere;
