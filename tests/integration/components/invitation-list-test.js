import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/start-mirage';

moduleForComponent('invitation-list', 'Integration | Component | invitation list', {
  integration: true,
  setup() {
    startMirage(this.container);
  },
  afterEach() {
    server.shutdown();
  }
});

test('it renders all invitations', function(assert) {
  const invitationNumber = 3;
  const model = server.createList('invitation', invitationNumber);
  this.set('model', model);

  this.render(hbs`{{invitation-list invitations=model}}`);

  assert.equal(this.$('tbody tr').length, invitationNumber, `${invitationNumber} rows are visible`);
});
