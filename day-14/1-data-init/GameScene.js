import { LevelSetup } from '../components/levelsetup.js';
import { Diamonds } from '../components/objectsSetup.js';
import { Player } from '../components/playerSetup.js';

export class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.score = 0;

    const map = this.make.tilemap({ key: 'tilelayers' });

    const tileSet = map.addTilesetImage(
      'runner-asset-sheet-with-transparency',
      'tileimage',
    );

    //create level
    const worldLayer = new LevelSetup(this);
    worldLayer.createLevel(map, tileSet);

    // create curosr keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // create player
    const playerInstance = new Player(this);
    playerInstance.createPlayer();
    this.player = playerInstance.player; // Store sprite on scene
    this.playerController = playerInstance; // Store controller for updates

    // create diamonds object
    const diamondsInstance = new Diamonds(this);
    diamondsInstance.createDiamonds(map);
    this.diamonds = diamondsInstance.diamonds; // Store group on scene
    this.totalDiamonds = this.diamonds.getChildren().length; // Store initial count

    // physics and collision rules
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.overlap(this.player, this.diamonds, (player, diamond) => {
      this.score += 10;
      diamond.destroy(); // Remove the diamond from the game
    });
  }

  update() {
    this.playerController.update(this.cursors);

    if (this.score === this.totalDiamonds * 10) {
      // pass the final score to the GameOver scene using init()
      this.scene.start('GameOver', { score: this.score });
    }
  }
}
