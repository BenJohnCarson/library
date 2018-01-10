import Component from '@ember/component';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'invitation.email': [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
});

export default Component.extend(Validations, {
  disabled: Ember.computed.not('validations.isValid'),

  actions: {
    submitInvitation(newInvitation) {
      this.get('saveInvitation')(newInvitation).then(res => {
        this.set('responseMessage', `Thank you! We've just saved your email address: ${res.get('email')}`);
        this.set('invitation.email', '');
      })
    }
  }
});
