import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop';

moduleForComponent('coming-soon', 'Integration | Component | coming soon', {
  integration: true
});

test('Invitation button is inactive when input is empty', function(assert) {
  this.render(hbs`{{coming-soon}}`);
  assert.equal(this.$('[data-test-inv-button]').prop('disabled'), true, 'Invitation button is disabled');
});

test('Invitation button is inactive when input is not a valid email', function(assert) {
  this.render(hbs`{{coming-soon}}`);

  this.$('[data-test-email-input]').val('this is not an email address').change();

  assert.equal(this.$('[data-test-inv-button]').prop('disabled'), true, 'Invitation button is disabled');  
});

test('Invitation button is enabled when email input is valid', function(assert) {
  this.render(hbs`{{coming-soon}}`);
  
  this.$('[data-test-email-input]').val('test@test.com').change();
  
  assert.equal(this.$('[data-test-inv-button]').prop('disabled'), false, 'Invitation button is enabled');
})

test('Response message displayed after clicking invitation button', function(assert) {
  this.render(hbs`{{coming-soon}}`);

  this.$('[data-test-email-input]').val('test@test.com').change();
  run(() => document.querySelector('[data-test-inv-button]').click());

  assert.ok(this.$('[data-test-response-msg]').text(), 'Response message is rendered');
});

test('Input is cleared after invitation is sent', function(assert) {
  this.render(hbs`{{coming-soon}}`);

  this.$('[data-test-email-input]').val('test@test.com').change();
  run(() => document.querySelector('[data-test-inv-button]').click());

  assert.equal(this.$('[data-test-email-input]').val(), '', 'Input is empty');
});
