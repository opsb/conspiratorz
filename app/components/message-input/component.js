import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addMessage(text) {
      this.sendAction('onAddMessage', text);
    }
  }
});
