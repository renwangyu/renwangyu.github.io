import { noop } from 'src/utils';
import { Crood } from './base';
import { rAF } from 'src/utils';

const PI = Math.PI;

class Meteor {
  constructor(params) {
    const {
      id,
      canvas,
      ctx,
      from = new Crood(0, 0),
      to = new Crood(0, 0),
      speed = 0, // px/s
      delt = 10,
      r = 1, // raduis px
      color = 'rgba(250,250,250,1)',
      cbDistory = noop, // distory callback function
    } = params;

    this.canvas = canvas;
    this.ctx = ctx;
    this.id = id;
    this.from = from;
    this.to = to;
    this.speed = speed;
    this.delt = delt;
    this.r = r;
    this.color = color;
    this.cbDistory = cbDistory;
    this.handle = null; // raf handle
    this.isDistory = false;

    this.dur = Math.sqrt(Math.pow(this.to.x - this.from.x, 2) + Math.pow(this.to.y - this.from.y, 2)) * 1000 / this.speed;
    this.pass = 0;
    this.now = this.from.copyCrood();
  }

  draw() {
    
    this.pass = Math.min(this.pass + this.delt, this.dur);
    const percent = this.pass / this.dur;
    if (percent === 1) {
      return this.distory();
    }
    this.now.setCrood(
      this.from.x + (this.to.x - this.from.x) * percent,
      this.from.y + (this.to.y - this.from.y) * percent,
    );

    this.ctx.save();
    this.ctx.beginPath(); 
    this.ctx.arc(this.now.x, this.now.y, this.r * 1, 0, PI * 2, true); 
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.restore();
  }

  isOutRange() {
    const { width, height } = this.canvas;
    return (this.now.x >= width) || (this.now.y >= height) || (this.now.x <= 0) || (this.now.y <= 0);
  }

  start() {
    const { width, height } = this.canvas;
    if ((this.now.x >= width) || (this.now.y) >= height) {
      return this.distory();
    }
    this.draw();
    this.handle = rAF(this.start.bind(this));
  }

  distory() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.clearRect(this.now.x - this.r, this.now.y - this.r, this.r * 2, this.r * 2);
    cancelAnimationFrame(this.handle);
    this.isDistory = true;
    typeof this.cbDistory === 'function' && this.cbDistory();
  }

}

export default Meteor;
