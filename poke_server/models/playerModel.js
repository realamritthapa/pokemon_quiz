export class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.score = 0;
    this.ready = false;
  }

  increaseScore(points) {
    this.score += points;
  }
}
