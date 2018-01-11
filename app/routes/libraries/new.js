import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('library');
  },
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('buttonLabel', 'Add to library list');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
