export class Player {
  constructor(id, name, avatar) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.score = 0;
    this.ready = false;
  }

  increaseScore(points) {
    this.score += points;
  }

  getBasicInfo() {
    let basicInfo = {
      userName: this.name,
      avatar: this.avatar,
    };
    return basicInfo;
  }
}
