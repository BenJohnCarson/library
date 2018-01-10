import Component from '@ember/component';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'contact.email': [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  'contact.message': [
    validator('presence', true),
    validator('length', { min: 5 })
  ]
});

export default Component.extend(Validations, {
  disabled: Ember.computed.not('validations.isValid'),

  actions: {
    submitContact(newContact) {
      this.get('saveContact')(newContact).then(() => {
        this.set('contact.email', '');
        this.set('contact.message', '');
        this.set('successMessage', 'We got your message, we\'ll be in contact soon');
      })
    }
  }
});
