class Crood {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  setCrood(x, y) {
    this.setX(x);
    this.setY(y);
  }
  copyCrood() {
    return new Crood(this.x, this.y);
  }
  getCroodXY() {
    return [this.x, this.y];
  }
}

export {
  Crood,
}
