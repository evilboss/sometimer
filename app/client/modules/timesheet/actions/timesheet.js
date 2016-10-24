export default {
  update({Meteor, LocalState}, timelogId, timelogType, time) {
    LocalState.set('TIMESHEET_ERROR', null);
    if (!timelogId) {
      LocalState.set('TIMESHEET_ERROR', {timelogId: timelogId, timelogType: timelogType, message: 'Timesheet Error'});
      return;
    }
    if (!time) {
      LocalState.set('TIMESHEET_ERROR', {timelogId: timelogId, timelogType: timelogType, message: 'time is required'});
      return;
    }
  },
  clearErrors({LocalState}) {
    return LocalState.set('TIMESHEET_ERROR', null);
  }
}
