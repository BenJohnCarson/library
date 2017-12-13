import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(newLibrary) {
      this.get('saveLibrary')(newLibrary);
    }
  }
});
