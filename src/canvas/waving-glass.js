import { Crood } from './base';
import { getRandom } from 'src/utils';
import SingleGlassPng from 'src/assets/single-glass.png';

const glassImg = new Image();
glassImg.src = SingleGlassPng;
const W = 30;
const H = 150;

export default class WavingGlass {
  constructor(params) {
    const {
      canvas,
      ctx,
      scale = .8,
      x = 0,
      y = 0,
      delt = 0.5,
    } = params;
    this.canvas = canvas;
    this.ctx = ctx;
    this.scale = scale;
    this.pos = new Crood(x, y);
    this.width = W * this.scale;
    this.height = H * this.scale;
    this.delt = delt;
    this.angle = 0;
    this.mathFun = getRandom(1, 10) > 5 ? 'sin' : 'cos';
  }

  draw() {
    this.angle += this.delt;
    const rad = this.angle * Math.PI / 180;
    this.ctx.save();
    this.ctx.translate(this.pos.x, this.pos.y);
    this.ctx.rotate(Math[this.mathFun](rad) * 0.2 + 0.2);
    this.ctx.drawImage(glassImg, 0, 0, this.width,  -this.height);
    this.ctx.restore();
  }

}
