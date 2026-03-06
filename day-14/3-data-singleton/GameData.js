class GameDataManager {
  constructor() {
    if (!GameDataManager.instance) {
      this.score = 0;

      GameDataManager.instance = this;
    }
    return GameDataManager.instance;
  }

  addScore(amount) {
    this.score += amount;
  }

  reset() {
    this.score = 0;
  }
}

const GDM = new GameDataManager();
export default GDM;
