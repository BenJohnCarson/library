import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  email: '',
  validEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  disabled: Ember.computed.not('validEmail')
});
