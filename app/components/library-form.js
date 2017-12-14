import Component from '@ember/component';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const { computed } = Ember;

const Validations = buildValidations({
  'library.name': [
    validator('presence', true)
  ],
  'library.address': [
    validator('presence', true)
  ],
  'library.phone': [
    validator('presence', true)
  ]
});

export default Component.extend(Validations, {
  disabled: computed.not('validations.isValid'),
  
  actions: {
    submitForm(newLibrary) {
      this.get('saveLibrary')(newLibrary);
    }
  }
});
