import React, { useRef, useEffect, useContext } from 'react';
import { init, loop } from 'src/three/rocket';
import bbPic from 'src/assets/bb.png';

function Prompt() {
  useEffect(() => {
    init();
    loop();
  }, []);

  return (
    <article className="mobile-page-prompt">
      <div className="mobile-page-prompt_head">
        <img src={bbPic} alt="avatar"/>
        <div className="mobile-page-prompt_head--tip">
          <div>请在pc端打开链接</div>
          <div>让我们出发吧~</div>
        </div>
      </div>
      <div id="container"></div>
    </article>
  )
}

export default Prompt;
