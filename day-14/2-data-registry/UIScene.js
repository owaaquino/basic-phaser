export default class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UIScene' });
    this._scoreListener = null;
  }

  create() {
    let score = this.registry.get('score') || 0; // Get initial score from registry
    this.scoreText = this.add
      .text(16, 16, `Score: ${score}`, {
        fontSize: '24px',
        fill: '#fff',
      })
      .setScrollFactor(0);

    // listen for registry changes so the text updates automatically
    // keep a reference to the callback so we can remove it later
    this._scoreListener = (parent, value) => {
      if (this.scoreText && !this.scoreText.destroyed) {
        this.scoreText.setText(`Score: ${value}`);
      }
    };
    this.registry.events.on('changedata-score', this._scoreListener);

    // clean up when the UI scene shuts down to avoid leftover callbacks
    this.events.on('shutdown', () => {
      this.registry.events.off('changedata-score', this._scoreListener);
    });
  }
}
