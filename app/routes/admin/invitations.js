import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default Route.extend({
  model() {
    return {
      model: this.get('invitationsTask').perform(),
    }
  },

  invitationsTask: task(function * () {
    return yield this.store.findAll('invitation');
  })
});
