import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addMessage(text) {
      console.log('added message', text);
    }
  }
});
