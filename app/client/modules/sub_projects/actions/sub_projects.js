export default {
  create({Meteor, LocalState}, subProject) {
    LocalState.set('CREATE_SUBPROJECT_ERROR', null);
    if (!subProject) {
      LocalState.set('CREATE_SUBPROJECT_ERROR', 'Sub -Project is required.');
      return;
    }
    if (!subProject.name) {
      LocalState.set('CREATE_SUBPROJECT_ERROR', 'Name is required.');
      return;
    }
    if (!subProject.details) {
      LocalState.set('CREATE_SUBPROJECT_ERROR', 'Details is required.');
      return;
    }
    Meteor.call('sub_projects.create', subProject, (err) => {
      if (err) {
        alert(`Sub-Project creating failed: ${err.message}`);
      }
    });  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_SUBPROJECT_ERROR', null);
  }
}
