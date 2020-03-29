import React, { useRef, useEffect } from 'react';

const screenAvailWidth = window.screen.availWidth;

function Home() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log(ctx);
  });

  return (
    <div className="page-home">
      <div>home</div>
      <canvas
        ref={canvasRef}
        id="meteor"
        width={ screenAvailWidth }
        height="300"
        className="bottom-glass"
        />
    </div>
  );
}

export default Home;
