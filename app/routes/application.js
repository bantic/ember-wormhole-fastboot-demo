import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.set('renderWormhole4InPlace', true);
    controller.set('wormhole5Target', 'wormhole5a');
  },

  actions: {
    toggleWormhole3() {
      this.controller.toggleProperty('showWormhole3');
    },
    toggleWormhole4() {
      this.controller.toggleProperty('renderWormhole4InPlace');
    },
    targetWormhole5(target) {
      this.controller.set('wormhole5Target', 'wormhole5' + target);
    }
  }
});
