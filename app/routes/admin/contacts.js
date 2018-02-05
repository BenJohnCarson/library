import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default Route.extend({
  model() {
    return {
      model: this.get('contactsTask').perform()
    }
  },

  contactsTask: task(function * () {
    return yield this.store.findAll('contact');
  })
});
