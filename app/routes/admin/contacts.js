import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const contacts = this.store.findAll('contact');

    return {
      models: contacts,
      tableHeaders: [
        'E-mail',
        'Message'
      ]
    }
  }
});
