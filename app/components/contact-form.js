import Component from '@ember/component';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  message: [
    validator('presence', true),
    validator('length', { min: 5 })
  ]
});

export default Component.extend(Validations, {
  email: '',
  message: '',
  disabled: Ember.computed.not('validations.isValid'),

  actions: {
    sendMessage() {
      this.set('email', '');
      this.set('message', '');
      this.set('successMessage', 'We got your message, we\'ll be in contact soon');
    }
  }
});
