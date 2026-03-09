import { EventBus, EVENTS } from './EventBus.js';

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

    EventBus.on(
      EVENTS.SCORE_UPDATED,
      (this._scoreListener = (newScore) => {
        this.scoreText.setText(`Score: ${newScore}`);
      }),
    );

    this.events.on('shutdown', () => {
      EventBus.off(EVENTS.SCORE_UPDATED);
    });
  }
}
