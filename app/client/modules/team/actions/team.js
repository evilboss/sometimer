export default {
  deleteTeam({Meteor, LocalState}, teamId) {
    Meteor.call('team.remove', teamId)
  }
}
