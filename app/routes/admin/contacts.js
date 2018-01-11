import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default Route.extend({
  model() {
    return {
      models: this.get('contactsTask').perform(),
      tableHeaders: [
        'E-mail',
        'Message'
      ]
    }
  },

  contactsTask: task(function * () {
    return yield this.store.findAll('contact');
  }),

  actions: {
    deleteContact(contact) {
      return contact.destroyRecord();
    }
  }
});
