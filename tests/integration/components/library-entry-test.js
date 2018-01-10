import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('library-entry', 'Integration | Component | library entry', {
  integration: true,
  beforeEach() {
    let library = { name: 'test-name', address: 'test-address', phone: '01234567891'};
    this.set('library', library);
  }
});

test('it renders id and email', function(assert) {
  this.render(hbs`{{library-entry library=library}}`);

  assert.equal(this.$('[data-test-name]').text(), 'test-name', 'Name is visible');
  assert.equal(this.$('[data-test-address]').text(), 'Address: test-address', 'Address is visible');
  assert.equal(this.$('[data-test-phone]').text(), 'Phone: 01234567891', 'Phone is visible');
});
