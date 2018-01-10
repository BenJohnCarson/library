import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/start-mirage';

moduleForComponent('library-list', 'Integration | Component | library list', {
  integration: true,
  setup() {
    startMirage(this.container);
  },
  afterEach() {
    server.shutdown();
  }
});

test('it renders all libraries', function(assert) {
  const libraryNumber = 3;
  const model = server.createList('library', libraryNumber);
  this.set('model', model);

  this.render(hbs`{{library-list libraries=model}}`);

  assert.equal(this.$('[data-test-library]').length, libraryNumber, `${libraryNumber} libraries are visible`);
});
