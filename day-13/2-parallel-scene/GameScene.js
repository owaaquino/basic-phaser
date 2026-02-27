export default class GameSene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.add.text(100, 100, 'Game Scene', { fontSize: '32px', fill: '#fff' });
  }
}
