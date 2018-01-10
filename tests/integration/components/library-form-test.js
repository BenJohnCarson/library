import { moduleForComponent, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('library-form', 'Integration | Component | library form', {
  integration: true,
  beforeEach() {
    let model = {
      name: '',
      address: '',
      phone: ''
    };

    this.set('model', model);
  }
});

test('Submit button disabled behaviour correct', function(assert) {
  let saveLibrary = () => {};
  this.set('saveLibrary', saveLibrary);
  this.render(hbs`{{library-form library=model saveLibrary=saveLibrary}}`);
  
  const submitBtn = this.$('[data-test-submit]');
  
  assert.equal(submitBtn.prop('disabled'), true, 'Send button disabled when fields are empty');
  
  this.$('input[data-test-name]').val('test name').change();
  this.$('input[data-test-address]').val('test address').change();
  
  assert.equal(submitBtn.prop('disabled'), true, 'Send button disabled when phone field is empty');
  
  this.$('input[data-test-phone]').val('test phone').change();
  this.$('input[data-test-address]').val('').change();
  
  assert.equal(submitBtn.prop('disabled'), true, 'Send button disabled when address field is empty');
  
  this.$('input[data-test-name]').val('').change();
  this.$('input[data-test-address]').val('test address').change();
  
  assert.equal(submitBtn.prop('disabled'), true, 'Send button disabled when name field is empty');
});

test('Submit button enabled when all inputs are valid', function(assert) {
  let saveLibrary = () => {};
  this.set('saveLibrary', saveLibrary);
  this.render(hbs`{{library-form library=model saveLibrary=saveLibrary}}`);

  this.$('input[data-test-name]').val('test name').change();
  this.$('input[data-test-address]').val('test address').change();
  this.$('input[data-test-phone]').val('test phone').change();

  assert.notOk(this.$('[data-test-submit]').is(':disabled'), 'Send button enabled when all fields have a value');
});

test('Submit button calls route action with correct model', function(assert) {
  assert.expect(3);
  
  let name = 'test name',
    address = 'test address',
    phone = '01234567891',
    saveLibrary = (newLibrary) => {
      assert.equal(newLibrary.name, name, 'Name value is correct');
      assert.equal(newLibrary.address, address, 'Address value is correct');
      assert.equal(newLibrary.phone, phone, 'Phone value is correct');
    };
  
  this.set('saveLibrary', saveLibrary);
  this.render(hbs`{{library-form library=model saveLibrary=(action saveLibrary)}}`);
  
  this.$('input[data-test-name]').val(name).change();
  this.$('input[data-test-address]').val(address).change();
  this.$('input[data-test-phone]').val(phone).change();
  this.$('[data-test-submit]').click();
});
