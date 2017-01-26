import {sweetPrompts} from "/client/utils/helpers/sweet-helper";
const updateTeam = (id, team) => {
  Meteor.call('team.update', id, team);
  sweetPrompts.sweetSucces('Team Updated', 'Click OK To continue', 'success', '/dashboard/team');
};
const transferTeam = (id, team) => {
  sweetPrompts.sweetSucces('Team Transfered', 'Click OK To continue', 'success', '/dashboard/team');
};
const updateError = (LocalState, error) => {
  LocalState.set('UPDATE_TEAM_ERROR', `Required ${error}`);

};
const create = () => {
  Meteor.call('team.insert', team, (err, createdTeam) => {
    if (createdTeam) {
      sweetPrompts.sweetIfElseSucces('', 'Team Created', 'success',
        {path: '/dashboard/team/new', text: 'Add another Team'},
        {path: `/dashboard/team/${createdTeam}`, text: `View ${team.name}`})
    }
  });
};
export default {
  update({Meteor, LocalState}, id, team) {
    LocalState.set('UPDATE_TEAM_ERROR', null);
    const errors = [];
    (id) ? '' : errors.push('Team Id');
    (team) ? '' : errors.push('Team');
    (team.name) ? '' : errors.push('Team Name');
    (_.isEmpty(errors)) ? updateTeam(id, team) : updateError(LocalState, errors.toString());
  },
  transferTeam({Meteor, LocalState}, id, team) {
    LocalState.set('UPDATE_TEAM_ERROR', null);
    transferTeam(id, team);
  },
  create({Meteor, LocalState}, team) {
    LocalState.set('UPDATE_TEAM_ERROR', null);
    create(id, team);
  },
  deleteTeam({Meteor, LocalState}, teamId) {
    Meteor.call('team.remove', teamId);;;;;;;;;
    sweetPrompts.sweetSucces('Team Deleted', 'Click OK To continue', 'success', '/dashboard/team');
  },
  add({Meteor, LocalState}, teamName){
    console.log(teamName);
  },
  assignTeam({Meteor, LocalState}, teamId, userId){
    LocalState.set('UPDATE_TEAM_ERROR', null);
    Meteor.call('team.assign', teamId, userId);
  },
  clearErrors({LocalState}) {
    return LocalState.set('UPDATE_TEAM_ERROR', null);
  },
  forceEndShift({Meteor, LocalState}, userId){
    Meteor.call('timelogs.endShift', userId);
  }
}