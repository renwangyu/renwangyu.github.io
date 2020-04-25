import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import MeteorRain from 'src/canvas/meteor-rain';
import ContactInfo from 'src/components/contactInfo';

const screenAvailWidth = window.innerWidth;
const screenAvailHeight = window.innerHeight;

function Universe() {
  const canvasRef = useRef();
  const [ufo, setUfo] = useState(true);
  const [channel, setChannel] = useState('demo');

  const closeUfo = () => setUfo(false);
  const openUfo = () => setUfo(true);
  const toggleChannel = val => () => setChannel(val);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rain = new MeteorRain({ canvas, ctx, num: 200 });
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
      <div className={classnames('ufo-display-box', { hide: !ufo })}>
        <div className="ufo-bottom"></div>
        <div className="tech-box">
          <div className="tech-box-close-btn" onClick={closeUfo}></div>
          <div className="tech-box-lr"></div>
          { channel === 'contact' ?
              <ContactInfo className="contact-info-box" /> :
              <iframe src="https://renwangyu.github.io/beat_rabbit/fight.html" frameBorder="0" />
          }
          <div className="tech-btn-group">
            <div className="tech-btn" onClick={toggleChannel('demo')}>我的作品</div>
            <div className="tech-btn" onClick={toggleChannel('contact')}>联系方式</div>
          </div>
        </div>
      </div>
      <div className={classnames('ufo-show-bottom', { show: !ufo })} onClick={openUfo}></div>
      {/* <div id="plant"></div> */}
      <div className="universe-bottom"></div>
    </article>
  )
}

export default Universe;
