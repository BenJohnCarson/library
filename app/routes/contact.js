import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    saveContact(newContact) {
      return newContact.save();
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
