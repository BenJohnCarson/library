import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

test('it displays app title', function(assert) {
  this.render(hbs`{{nav-bar}}`);

  assert.equal(this.$('.navbar-brand').text().trim(), 'Library', 'Displays app tile \'Library\'');
});
