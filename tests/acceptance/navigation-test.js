import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation');

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
  