import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('invitation-entry', 'Integration | Component | invitation entry', {
  integration: true,
  beforeEach() {
    let invitation = { id: 1, email: 'test@test.com'};
    this.set('invitation', invitation);
  }
});

test('it renders id and email', function(assert) {
  this.render(hbs`{{invitation-entry invitation=invitation}}`);

  assert.equal(this.$('[data-test-id]').text(), '1', 'Id is visible');
  assert.equal(this.$('[data-test-email]').text(), 'test@test.com', 'Email is visible');
});
