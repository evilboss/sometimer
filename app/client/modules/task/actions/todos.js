export default {
  create({Meteor, LocalState}, todo) {
    LocalState.set('CREATE_TODO_ERROR', null);
    if (!todo) {
      LocalState.set('CREATE_TODO_ERROR', 'TASK text is required.');
      return;
    }
    if (!todo.taskId) {
      LocalState.set('CREATE_TODO_ERROR', 'Oops.. Something went wrong.!');
      return;
    }
    if (!todo.name) {
      LocalState.set('CREATE_TODO_ERROR', 'Name is required to create a task');
      return;
    }
    Meteor.call('todos.create',todo, (err) => {
      if (err) {
        alert(`Todo creating failed: ${err.message}`);
      }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_TODO_ERROR', null);
  }
}
