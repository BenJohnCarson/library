import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default Route.extend({
  model() {
    return {
      models: this.get('invitationsTask').perform(),
      tableHeaders: [
        'E-mail'
      ]
    }
  },

  invitationsTask: task(function * () {
    return yield this.store.findAll('invitation');
  }),

  actions: {
    deleteInvitation(invitation) {
      return invitation.destroyRecord();
    }
  }
});
