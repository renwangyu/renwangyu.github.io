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
      <div className="my-game">
        <div className="my-game-lr"></div>
        <iframe src="https://renwangyu.github.io/beat_rabbit/fight.html" frameborder="0" />
      </div>
    </article>
  )
}

export default Universe;
