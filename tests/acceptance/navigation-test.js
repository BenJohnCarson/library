import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation', {
  afterEach() {
    server.shutdown();
  }
});

test('visiting /', function(assert) {
  visit('/');
  click('.navbar-brand');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });

  click('[data-test-nav-home]');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('Navigate to about', function(assert) {
  visit('/');
  click('[data-test-nav-about]');
  
  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('Navigate to contact', function(assert) {
  visit('/');
  click('[data-test-nav-contact]');

  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});

test('Navigate to admin/invitations', function(assert) {
  visit('/');
  click('[data-test-nav-invitations]');

  andThen(function() {
    assert.equal(currentURL(), '/admin/invitations');
  });
});

test('Navigate to libraries', function(assert) {
  visit('/');
  click('[data-test-nav-libraries]');

  andThen(function() {
    assert.equal(currentURL(), '/libraries');
  });
});
