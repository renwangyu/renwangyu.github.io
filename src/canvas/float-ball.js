import { Crood } from './base';
import { noop, getRandom } from 'src/utils';
import FloatPng from 'src/assets/floating.png';

const img = new Image();
img.src = FloatPng;

export default class FloatBall {
  constructor(params) {
    const {
      canvas,
      ctx,
      x,
      y,
      speed = 50,
      scale = getRandom(5, 12) / 10,
      dxRange = [0, 0],
      dyRange = [0, 0],
      cbDistroy = noop,
    } = params;
    this.isDestroy = false;
    this.canvas = canvas;
    this.ctx = ctx;
    this.pos = new Crood(x, y);
    this.speed = speed;
    this.dxRange = dxRange;
    this.dyRange = dyRange;
    this.cbDistroy = cbDistroy;
    this.img = img;
    this.imgWidth = 20 * scale;
    this.imgHeight = 20 * scale;
  }

  draw() {
    const [x, y] = this.pos.getCroodXY();
    this.ctx.clearRect(x - this.imgWidth / 2, y - this.imgHeight / 2, this.imgWidth, this.imgHeight);
    const nextX = x + this._randomDx() / this.speed;
    const nextY = y + this._randomDy() / this.speed;
    this.pos.setCrood(nextX, nextY);
    if (this.isOutRange()) {
      return this.destroy();
    }
    this.ctx.drawImage(this.img, this.pos.x - this.imgWidth / 2, this.pos.y - this.imgHeight / 2, this.imgWidth, this.imgHeight)
  }

  _randomDx() {
    const [m, n] = this.dxRange;
    return getRandom(m, n);
  }

  _randomDy() {
    const [m, n] = this.dyRange
    return getRandom(m, n);
  }

  isOutRange() {
    const [x, y] = this.pos.getCroodXY();
    return ((x >= this.canvas.width) || (y <= 0));
  }

  destroy() {
    this.isDestroy = true;
    typeof this.cbDistroy === 'function' && this.cbDistroy();
  }

}
