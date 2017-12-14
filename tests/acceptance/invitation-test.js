import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation', {
  afterEach() {
    server.shutdown();
  }
});

test('Entering an invitation', function(assert) {
  visit('/');
  fillIn('[data-test-email-input]', 'test@test.com');
  click('[data-test-inv-btn]');

  andThen(function() {
    assert.ok(find('[data-test-response-msg]').length, 'Success message is visible');
  });

  visit('/admin/invitations');

  andThen(function() {
    assert.equal(find('[data-test-email]').text(), 'test@test.com', 'Invitation appears in admin invitation list');
  });
});
