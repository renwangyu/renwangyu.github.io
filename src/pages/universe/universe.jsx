import React, { useEffect, useRef } from 'react';
import MeteorRain from 'src/canvas/meteor-rain';

const screenAvailWidth = window.innerWidth;
const screenAvailHeight = window.innerHeight;

function Universe() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rain = new MeteorRain({ canvas, ctx, num: 100 });
    rain.launch();
  });

  return (
    <article className="page-universe">
      <canvas
        ref={canvasRef}
        id="meteor"
        width={ screenAvailWidth }
        height={ screenAvailHeight }
        />
      <div className="ufo-display-box">
        <div className="ufo-bottom"></div>
        <div className="tech-box">
          <div className="tech-box-lr"></div>
          <iframe src="https://renwangyu.github.io/beat_rabbit/fight.html" frameBorder="0" />
        </div>
      </div>

      <div className="plant-bottom"></div>
    </article>
  )
}

export default Universe;
