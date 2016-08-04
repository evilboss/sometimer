export default {
  create({Meteor, LocalState}, projectId, text) {
    LocalState.set('CREATE_COMMENT_ERROR', null);
    if (!text) {
      LocalState.set('CREATE_COMMENT_ERROR', 'Comment text is required.');
      return;
    }

    const id = Meteor.uuid();
    Meteor.call('comments.create', id, projectId, text, (err) => {
      if (err) {
        alert(`comments creating failed: ${err.message}`);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  }

}
