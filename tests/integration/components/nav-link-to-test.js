import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-link-to', 'Integration | Component | nav link to', {
  integration: true
});

test('Should render block text in anchor tag', function(assert) {
  this.render(hbs`
    {{#nav-link-to 'index'}}
      template block text
    {{/nav-link-to}}
  `);

  assert.equal(this.$('a').text().trim(), 'template block text');
});

test('Should render component as li element', function(assert) {
  this.render(hbs`
    {{#nav-link-to 'index'}}
      template block text
    {{/nav-link-to}}
  `);

  assert.ok(this.$('li').length, 'li tag rendered');
});
