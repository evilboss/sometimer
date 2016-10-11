export default {
  approveTimelog({Meteor, LocalState, FlowRouter}, timeLogId) {
    Meteor.call('timelogs.approve', timeLogId);
  }
}
