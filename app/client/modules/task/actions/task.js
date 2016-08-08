export default {
  create({Meteor, LocalState}, projectId, title) {
    LocalState.set('CREATE_TASK_ERROR', null);
    if (!title) {
      LocalState.set('CREATE_TASK_ERROR', 'TASK text is required.');
      return;
    }

    const id = Meteor.uuid();
    Meteor.call('task.create', id, projectId, title, (err) => {
      if (err) {
        alert(`task creating failed: ${err.message}`);
      }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_TASK_ERROR', null);
  }
}
