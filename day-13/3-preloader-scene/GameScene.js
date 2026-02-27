export class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.score = 0;
    this.add.text(10, 10, 'Playing...', { fill: '#fff' });

    // A fake "Death" button for demonstration
    let dieButton = this.add
      .text(400, 300, 'CLICK TO DIE (LOSE)', { fill: '#f00' })
      .setOrigin(0.5)
      .setInteractive();

    dieButton.on('pointerdown', () => {
      // We pass the score to the next scene as an object
      this.scene.start('GameOver', { finalScore: 100 });
    });
  }
}
