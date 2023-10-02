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
    console.log("This players score is: ", this.score);
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

  isReady() {
    return this.ready;
  }
}
