import WavingGlass from './waving-glass';
import { getRandom, rAF } from 'src/utils';

export default class WavingGlassGroup {
  constructor(params) {
    const {
      canvas,
      ctx,
      total = 10,
    } = params;
    this.canvas = canvas;
    this.ctx = ctx;
    this.glassArr = [];
    this.total = total;
    this.handle = null;
    this.running = false;
    this.init();
  }

  init() {
    for (let i = 0; i < this.total; i++) {
      this.glassArr.push(this._createSingleGlass());
    }
  }

  start() {
    this.running = true;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.glassArr.forEach(glass => {
      glass.draw();
    })
    this.handle = rAF(this.start.bind(this));
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.handle);
  }

  _createSingleGlass() {
    const { canvas, ctx } = this;
    const x = getRandom(0, canvas.width);
    const y = 320;
    const scale = getRandom(9, 15) / 10;
    const delt = getRandom(5, 12) / 10;
    return new WavingGlass({
      canvas,
      ctx,
      x,
      y,
      scale,
      delt,
    });
  }
}