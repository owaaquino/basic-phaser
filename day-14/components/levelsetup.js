export class LevelSetup {
  constructor(scene) {
    this.scene = scene;
  }

  createLevel(map, tileSet) {
    this.scene.backgroundLayer = map.createLayer('background', tileSet, 0, 0);
    this.scene.backgroundLayer2 = map.createLayer('background2', tileSet, 0, 0);

    this.scene.platforms = map.createLayer('platforms', tileSet, 0, 0);

    this.scene.platforms.setCollisionByExclusion([-1]);
  }
}
