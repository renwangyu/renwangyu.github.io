import React, { useRef, useEffect } from 'react';
import FloatBallGroup from 'src/canvas/float-ball-group';


const screenAvailWidth = window.innerWidth;
const Height = 300;

function Home() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const fbg = new FloatBallGroup({
      canvas,
      ctx,
      total: 9,
    });
    fbg.start();
  });

  return (
    <div className="page-home">
      <div>home</div>
      <canvas
        ref={canvasRef}
        id="glass"
        width={ screenAvailWidth }
        height={Height}
        className="bottom-glass"
        />
      <div className="bottom-glass"></div>
    </div>
  );
}

export default Home;
