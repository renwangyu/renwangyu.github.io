import React, { useEffect, useRef } from 'react';
import MeteorRain from 'src/canvas/meteor-rain';

const screenAvailWidth = window.screen.availWidth;
const screenAvailHeight = window.screen.availHeight;

function Universe() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rain = new MeteorRain({ canvas, ctx, num: 100 });
    rain.launch();
  });

  return (
    <div className="page-universe">
      <canvas
        ref={canvasRef}
        id="meteor"
        width={ screenAvailWidth }
        height={ screenAvailHeight }
        />
    </div>
  )
}

export default Universe;
