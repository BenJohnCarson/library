import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('library', params.library_id);
  },
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('buttonLabel', 'Save changes');
  },

  actions: {

    saveLibrary(library) {
      library.save().then(() => this.transitionTo('libraries'));
    },

    willTransition(transition) {

      const model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        const confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});