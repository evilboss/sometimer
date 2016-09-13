export default {
  update({Meteor, LocalState}, timeData) {
    LocalState.set('TIMESHEET_ERROR', null);
    if (timeData) {
      LocalState.set('TIMESHEET_ERROR', 'time data is required');
      return;
    }
  },
  clearErrors({LocalState}) {
    return LocalState.set('TIMESHEET_ERROR', null);
  }
}
