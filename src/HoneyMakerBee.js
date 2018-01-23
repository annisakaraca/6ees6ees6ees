class HoneyMakerBee extends Bee {
  constructor(age, job, color, food, eat, honeyPot) {
    super(color, eat)
    this.age = 10;
    this.color = 'yellow';
    this.honeyPot = 0;
    this.job = 'make honey';
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
}
