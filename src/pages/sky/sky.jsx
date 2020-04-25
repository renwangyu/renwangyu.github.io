import React, { useContext } from 'react';
import storeContext from 'src/redux/store';
import Introduce from 'src/components/introduce';

function Sky() {

  const { state } = useContext(storeContext);

  return (
    <article className="page-sky">
      <div className="mac">
        { state.stage === 'sky' && <Introduce className="show-content" />}
      </div>
      <div className="tech-penguin"></div>
      <div className="cloud"></div>
    </article>
  );
}

export default Sky;
