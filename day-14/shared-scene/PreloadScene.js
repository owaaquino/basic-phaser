export default class PreloadScene extends Phaser.Scene {
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

    this.load.image('tileimage', '../assets/space-runner-tiles.png');
    this.load.tilemapTiledJSON('tilelayers', '../assets/tiles/spacerun.json');

    this.load.image('diamond', '../assets/Diamond.png');

    this.load.spritesheet('astronaut-idle', '../assets/astronaut-idle.png', {
      frameWidth: 24,
      frameHeight: 24,
    });

    this.load.spritesheet('astronaut-run', '../assets/astronaut-run.png', {
      frameWidth: 24,
      frameHeight: 24,
    });

    this.load.spritesheet('astronaut-jump', '../assets/astronaut-jump.png', {
      frameWidth: 24,
      frameHeight: 24,
    });

    this.load.spritesheet('astronaut-death', '../assets/astronaut-death.png', {
      frameWidth: 24,
      frameHeight: 24,
    });

    this.load.spritesheet('alien-idle', '../assets/alien-idle.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('alien-run', '../assets/alien-run.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('alien-jump', '../assets/alien-jump.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('alien-death', '../assets/alien-death.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.image('platform', '../assets/platform.png');
    this.load.tilemapTiledJSON('level1', '../assets/tiles/level1.json');

    this.load.image('star', '../assets/star.png');

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
