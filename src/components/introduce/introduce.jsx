import React, { useEffect, useRef } from 'react';

function Introduce(props) {
  // const textRef = useRef();

  useEffect(() => {
    // const t1 = new TextEffect('.tlt').textillate();
    // t1.on('end', () => {
    //   console.log('hello')
    //   const t2 = new TextEffect('.tlt2').textillate();
    // })
    // $('.tlt').textillate();

  });

  return (
    <article className="comp-introduce">
      <div className="tlt">
        IntroduceIntroduceIntroduce
      </div>
      <div className="tlt2">
        换行换行换行换行换行换行换行换行换行换行
      </div>
      
    </article>
  )
}

export default Introduce;
