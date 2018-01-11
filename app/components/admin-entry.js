import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  tagName: 'tr',

  deleteTask: task(function * (record) {
    yield this.get('deleteRecord')(record);
  }).drop(),

  actions: {
    deleteRecord(record) {
      this.get('deleteTask').perform(record);
    }
  }
});
