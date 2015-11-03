import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addMessage(text) {
      const message = this.store.createRecord('message', {body: text});
      message.save();
    }
  }
});
