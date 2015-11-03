import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
  reversedMessages: computed('messages.[]', function() {
    return this.get('messages').toArray().reverse();
  })
});
