import Component from '@ember/component';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
});

export default Component.extend(Validations, {
  email: '',
  disabled: Ember.computed.not('validations.isValid'),

  actions: {
    saveInvitation() {
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('email')}`);
      this.set('email', '');
    }
  }
});
