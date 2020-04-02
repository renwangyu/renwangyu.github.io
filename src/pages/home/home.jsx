import React, { useRef, useEffect } from 'react';
import FloatBallGroup from 'src/canvas/float-ball-group';
import WavingGlassGroup from 'src/canvas/waving-glass-group';

const screenAvailWidth = window.innerWidth;
const Height = 300;

function Home() {
  const canvasRef = useRef();
  const canvasGlassRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasGlass = canvasGlassRef.current;
    const ctxGlass = canvasGlass.getContext('2d');

    const fbg = new FloatBallGroup({
      canvas,
      ctx,
      total: 10,
    });
    fbg.start();

    const wgg = new WavingGlassGroup({
      canvas: canvasGlass,
      ctx: ctxGlass,
      total: 20
    });
    wgg.start();

    return () => {
      fbg.stop();
      wgg.stop();
    }
  });

  return (
    <div className="page-home">
      <div className="page-home_sea"></div>
      <div className="page-home_land"></div>
      
      <canvas
        ref={canvasRef}
        id="floating"
        width={ screenAvailWidth }
        height={Height}
        />
      <canvas
        ref={canvasGlassRef}
        id="glass"
        width={ screenAvailWidth }
        height={Height}
        className="bottom-glass"
        />
    </div>
  );
}

export default Home;
