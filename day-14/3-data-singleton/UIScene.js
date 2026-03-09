import GDM from './GameData.js';

export default class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UIScene' });
  }

  create() {
    this.scoreText = this.add.text(16, 16, `Score: 0`, {
      fontSize: '24px',
      fill: '#fff',
    });
  }

  update() {
    this.scoreText.setText(`Score: ${GDM.score}`);
  }
}
