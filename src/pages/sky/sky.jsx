import React, { useEffect, useRef } from 'react';
import Introduce from 'src/components/introduce';

function Sky() {
  return (
    <article className="page-sky">
      <div className="mac">
        <Introduce />
      </div>
      <div className="cloud"></div>
    </article>
  );
}

export default Sky;
