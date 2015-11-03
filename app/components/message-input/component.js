import Ember from 'ember';

export default Ember.Component.extend({
  clear() {
    this.set('text', null);
  },

  actions: {
    addMessage(text) {
      this.clear();
      this.sendAction('onAddMessage', text);
    }
  }
});
