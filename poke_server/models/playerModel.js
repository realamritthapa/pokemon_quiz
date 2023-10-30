export class Player {
  constructor(id, name, avatar) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.score = 0;
    this.ready = false;
  }

  increaseScore() {
    this.score += 1;
  }

  getBasicInfo() {
    let basicInfo = {
      userName: this.name,
      avatar: this.avatar,
    };
    return basicInfo;
  }

  setReady() {
    this.ready = true;
    if (this.ready) {
      return true;
    } else {
      return false;
    }
  }

  //returns whether player is ready or not
  isReady() {
    return this.ready;
  }
}
