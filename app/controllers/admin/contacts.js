import Controller from '@ember/controller';

export default Controller.extend({
  tableHeaders: [
    'E-mail',
    'Message'
  ],
  type: 'Contact',

  actions: {
    deleteContact(contact) {
      return contact.destroyRecord();
    }
  }
});
