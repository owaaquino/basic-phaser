export class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    this.add
      .text(400, 200, 'MY AWESOME GAME', { fontSize: '48px' })
      .setOrigin(0.5);

    let playButton = this.add
      .text(400, 400, 'CLICK TO PLAY', { fontSize: '24px', fill: '#0f0' })
      .setOrigin(0.5)
      .setInteractive();

    // Switch to GameScene on click
    playButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
