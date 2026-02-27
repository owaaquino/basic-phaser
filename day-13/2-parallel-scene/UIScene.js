export default class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UIScene', active: true }); // Start this scene immediately
  }

  create() {
    this.add.text(100, 50, 'UI Scene', { fontSize: '32px', fill: '#fff' });
  }
}
