import Meteor from './meteor';
import { Crood } from 'src/canvas/base';
import { getRandom, rAF } from 'src/utils';

class MeteorRain {
  constructor(params) {
    const { canvas, ctx, num = 100 } = params;
    this.canvas = canvas;
    this.ctx = ctx;
    this.num = num;
    this.handle = null;
    this.timer = null;
    this.rain = [];
    this.isStop = false;

    this.generateRain();
    this.timer = setInterval(() => {
      this.generateRain();
    }, 2000);
  }

  generateRain() {
    for (let i = 0; i < this.num; i++) {
      this.rain.push(this.createOneMeteor(i));
    }
  }

  launch() {
    const isStop = this.rain.every(meteor => meteor.isDistory);
    if (isStop) {
      return this.stop();
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.rain.forEach(meteor => {
      !meteor.isDistory && meteor.draw();
    });

    this.handle = rAF(this.launch.bind(this));
  }

  createOneMeteor(index) {
    const speed = getRandom(300, 500);
    const delt = getRandom(10, 15);
    const toWidth = getRandom(0, this.canvas.width);
    const toHeight = getRandom(0, this.canvas.height);
    // const red = getRandom(0, 255);
    // const green = getRandom(0, 255);
    // const blue = getRandom(0, 255);
    
    return new Meteor({
      id: index,
      from: new Crood(this.canvas.width / 2, this.canvas.height / 2),
      to: new Crood(toWidth, toHeight),
      speed,
      delt,
      canvas: this.canvas,
      ctx: this.ctx,
      // color: `rgba(${red},${green},${blue},1)`
    });
  }

  stop() {
    this.isStop = true;
    clearInterval(this.handle);
  }
}

export default MeteorRain;
