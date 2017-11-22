import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop';

moduleForComponent('coming-soon', 'Integration | Component | coming soon', {
  integration: true,
  beforeEach() {
    let newInvitation = { email: ''};
    let saveInvitation = function () {
      return Ember.RSVP.Promise.resolve();
    }
    this.setProperties({
      model: newInvitation,
      saveInvitation: saveInvitation
    });
  }
});

test('Invitation button is inactive when input is empty', function(assert) {
  this.render(hbs`{{coming-soon invitation=model submitInvitation=saveInvitation}}`);
  assert.equal(this.$('[data-test-inv-btn]').prop('disabled'), true, 'Invitation button is disabled');
});

test('Invitation button is inactive when input is not a valid email', function(assert) {
  this.render(hbs`{{coming-soon invitation=model submitInvitation=saveInvitation}}`);

  this.$('[data-test-email-input]').val('this is not an email address').change();

  assert.equal(this.$('[data-test-inv-btn]').prop('disabled'), true, 'Invitation button is disabled');  
});

test('Invitation button is enabled when email input is valid', function(assert) {
  this.render(hbs`{{coming-soon invitation=model submitInvitation=saveInvitation}}`);
  
  this.$('[data-test-email-input]').val('test@test.com').change();
  
  assert.equal(this.$('[data-test-inv-btn]').prop('disabled'), false, 'Invitation button is enabled');
})

test('Response message displayed after clicking invitation button', function(assert) {
  this.render(hbs`{{coming-soon invitation=model submitInvitation=saveInvitation}}`);

  this.$('[data-test-email-input]').val('test@test.com').change();
  run(() => document.querySelector('[data-test-inv-btn]').click());

  assert.ok(this.$('[data-test-response-msg]').text(), 'Response message is rendered');
});

test('Input is cleared after invitation is sent', function(assert) {
  this.render(hbs`{{coming-soon invitation=model submitInvitation=saveInvitation}}`);

  this.$('[data-test-email-input]').val('test@test.com').change();
  run(() => document.querySelector('[data-test-inv-btn]').click());

  assert.equal(this.$('[data-test-email-input]').val(), '', 'Input is empty');
});
