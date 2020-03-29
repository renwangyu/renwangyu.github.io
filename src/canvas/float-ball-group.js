import FloatBall from './float-ball';
import { getRandom, rAF } from 'src/utils';

export default class FloatBallGroup {
  constructor(params) {
    const {
      canvas,
      ctx,
      total = 12,
    } = params;
    this.canvas = canvas;
    this.ctx = ctx;
    this.total = total; // 总共显示, 销毁一个生成一个
    this.balls = [];
    this.handle = null;
    this.running = false;
    this.init();
  }

  init() {
    for (let i = 0; i < this.total; i ++) {
      this.balls.push(this._createOneFloatBall());
    }
  }

  start() {
    this.running = true;
    this.balls.forEach(ball =>{
      !ball.isDestroy && ball.draw()
    })
    this.handle = rAF(this.start.bind(this));
  }

  _createOneFloatBall() {
    const { canvas, ctx } = this;
    const x = getRandom(0, canvas.width);
    const y = 300;
    const minDx = getRandom(-10, 0);
    const maxDx = getRandom(40, 60);
    const minDy = getRandom(-30, -20);
    const maxDy = getRandom(-20, 0);
    const speed = getRandom(50, 80);
    return new FloatBall({
      canvas,
      ctx,
      x,
      y,
      speed,
      dxRange: [minDx, maxDx],
      dyRange: [minDy, maxDy],
      cbDistroy: () => {
        // 先过滤销毁的ball，再添加一个新的
        this.balls = this.balls.filter(ball => !ball.isDestroy)
        this.balls.push(this._createOneFloatBall());
      }
    });
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.handle);
  }
}