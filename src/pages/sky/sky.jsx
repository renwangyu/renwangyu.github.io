import React, { useEffect, useRef } from 'react';
import Introduce from 'src/components/introduce';

function Sky() {
  return (
    <div className="page-sky">
      <div style={{color: 'white'}}>sky<span className="icon-html5-01"></span></div>
      <Introduce />
    </div>
  );
}

export default Sky;
