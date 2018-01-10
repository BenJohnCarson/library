import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const invitations = this.store.findAll('invitation');

    return {
      models: invitations,
      tableHeaders: [
        'E-mail'
      ]
    }
  }
});
