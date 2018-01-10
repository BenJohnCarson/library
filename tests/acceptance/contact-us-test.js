import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation', {
  afterEach() {
    server.shutdown();
  }
});

test('Entering a contact', function(assert) {
  visit('/contact');
  fillIn('[data-test-email-input]', 'test@test.com');
  fillIn('[data-test-msg-input]', 'test123');
  click('[data-test-send-btn]');

  andThen(function() {
    assert.ok(find('[data-test-success-msg]').length, 'Success message is visible');
  });

  visit('/admin/contacts');

  andThen(function() {
    assert.equal(find('.email-value').text(), 'test@test.com', 'Contact email appears in admin invitation list');
    assert.equal(find('.message-value').text(), 'test123', 'Contact message appears in admin invitation list');
  });
});