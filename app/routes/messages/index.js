import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('message');
  },

  actions: {
    addMessage(text) {
      const message = this.store.createRecord('message', {body: text});
      message.save();
    }
  }
});
