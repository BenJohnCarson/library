import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop';

moduleForComponent('contact-form', 'Integration | Component | contact form', {
  integration: true
});

test('Send message button disabled when inputs are invalid', function(assert) {
  this.render(hbs`{{contact-form}}`);

  const sendBtn = this.$('[data-test-send-btn]');

  assert.equal(sendBtn.prop('disabled'), true, 'Send button disabled when fields are empty');
  
  this.$('[data-test-msg-input]').val('Test message blah blah').change();
  this.$('[data-test-email-input]').val('Invalid email').change();
  
  assert.equal(sendBtn.prop('disabled'), true, 'Send button disabled when email is invalid');
  
  this.$('[data-test-msg-input]').val('1234').change();
  
  assert.equal(sendBtn.prop('disabled'), true, 'Send button disabled when message is too short');
});

test('Send message button enabled when inputs are valid', function(assert) {
  this.render(hbs`{{contact-form}}`);

  this.$('[data-test-msg-input]').val('Test message blah blah').change();
  this.$('[data-test-email-input]').val('test@test.com').change();

  assert.equal(this.$('[data-test-send-btn]').prop('disabled'), false, 'Send button is enabled');
});

test('Success message displayed after clicking send message button', function(assert) {
  this.render(hbs`{{contact-form}}`);
  
  this.$('[data-test-msg-input]').val('Test message blah blah').change();
  this.$('[data-test-email-input]').val('test@test.com').change();
  run(() => document.querySelector('[data-test-send-btn]').click());

  assert.ok(this.$('[data-test-success-msg]').text(), 'Success message is rendered');
});

test('Inputs are cleared after click of send button', function(assert) {
  this.render(hbs`{{contact-form}}`);
  
  this.$('[data-test-msg-input]').val('Test message blah blah').change();
  this.$('[data-test-email-input]').val('test@test.com').change();
  run(() => document.querySelector('[data-test-send-btn]').click());
  
  assert.equal(this.$('[data-test-email-input]').val(), '', 'Email is empty');
  assert.equal(this.$('[data-test-msg-input]').val(), '', 'Message is empty');  
});
