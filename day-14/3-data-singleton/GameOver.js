import GDM from './GameData.js';

export class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    let totalScore = GDM.score; // Get score from registry, default to 0 if not set

    this.add
      .text(400, 200, 'GAME OVER', { fontSize: '64px', fill: '#f00' })
      .setOrigin(0.5);
    this.add
      .text(400, 300, `Score: ${totalScore}`, { fontSize: '32px' })
      .setOrigin(0.5);

    let retryButton = this.add
      .text(400, 450, 'RETRY', { fontSize: '24px', fill: '#fff' })
      .setOrigin(0.5)
      .setInteractive();

    retryButton.on('pointerdown', () => {
      this.scene.start('GameScene');
      GDM.reset();
    });
  }
}
