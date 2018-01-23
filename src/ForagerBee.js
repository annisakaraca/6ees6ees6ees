class ForagerBee extends Bee{
  constructor(age, job, food, eat, canFly, treasureChest) {
    super(food, eat)
    this.age = 10
    this.job = 'find pollen'
    this.canFly = true
    this.treasureChest = []
  }
  forage(treasure) {
    this.treasureChest.push(treasure)
  }
};
