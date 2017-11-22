import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const invitation = this.store.createRecord('invitation', { email: '' });
    return invitation;
  },

  actions: {
    saveInvitation() {
      const invitation = this.modelFor(this.routeName);
      return invitation.save();
    }
  }
});