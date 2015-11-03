import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addMessage(text) {
      this.set('text', null);
      this.sendAction('onAddMessage', text);
    }
  }
});
