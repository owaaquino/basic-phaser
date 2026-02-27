export class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  // This method catches the data passed from the previous scene
  init(data) {
    this.score = data.finalScore || 0;
  }

  create() {
    this.add
      .text(400, 200, 'GAME OVER', { fontSize: '64px', fill: '#f00' })
      .setOrigin(0.5);
    this.add
      .text(400, 300, `Score: ${this.score}`, { fontSize: '32px' })
      .setOrigin(0.5);

    let retryButton = this.add
      .text(400, 450, 'RETRY', { fontSize: '24px', fill: '#fff' })
      .setOrigin(0.5)
      .setInteractive();

    retryButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
