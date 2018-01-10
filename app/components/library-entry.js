import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteLibrary(library) {
      this.get('deleteLibrary')(library);
    }
  }
});
