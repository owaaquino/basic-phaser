export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    // 1. Create a progress bar (visuals)
    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    // 2. Listen for the 'progress' event
    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      // value is a decimal from 0 to 1
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('complete', () => {
      console.log('PreloadScene: All assets loaded!');
    });

    // 3. Load EVERYTHING here
    // this.load.image('player', 'assets/player.png');
    // this.load.tilemapTiledJSON('map', 'assets/level1.json');
    // this.load.audio('bgm', 'assets/music.mp3');

    // Add a "heavy" loop for testing if you want to see the bar move!
    // for (let i = 0; i < 100; i++) {
    //   this.load.image('dummy' + i, 'assets/player.png');
    // }
  }

  create() {
    // Once loading is finished, go to the Main Menu
    this.scene.start('MenuScene');
  }
}
