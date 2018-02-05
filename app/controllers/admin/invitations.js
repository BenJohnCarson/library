import Controller from '@ember/controller';

export default Controller.extend({
  tableHeaders: [
    'E-mail'
  ],
  type: 'Invitation',

  actions: {
    deleteInvitation(invitation) {
      return invitation.destroyRecord();
    }
  }
});
