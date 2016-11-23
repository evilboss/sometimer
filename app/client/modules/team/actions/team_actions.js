import {sweetPrompts} from '/client/utils/helpers/sweet-helper';
const updateTeam = (id, team)=> {
  Meteor.call('team.update', id, team);
  sweetPrompts.sweetSucces('Team Updated', 'Click OK To continue', 'success', '/dashboard/team');
};
const transferTeam = (id, team)=> {
  sweetPrompts.sweetSucces('Team Transfered', 'Click OK To continue', 'success', '/dashboard/team');
};
const updateError = (LocalState, error)=> {
  LocalState.set('UPDATE_TEAM_ERROR', `Required ${error}`);
  return;
};

export default {
  update({Meteor, LocalState}, id, team) {
    LocalState.set('UPDATE_TEAM_ERROR', null);
    const errors = [];
    (id) ? '' : errors.push('Team Id');
    (team) ? '' : errors.push('Team');
    (team.name) ? '' : errors.push('Team Name');
    (_.isEmpty(team.members)) ? errors.push('Team members') : '';
    (_.isEmpty(errors)) ? updateTeam(id, team) : updateError(LocalState, errors.toString());
  },
  transferTeam({Meteor, LocalState}, id, team) {
    LocalState.set('UPDATE_TEAM_ERROR', null);
    transferTeam(id, team);
  },
  deleteTeam({Meteor, LocalState}, teamId) {
    Meteor.call('team.remove', teamId)
    sweetPrompts.sweetSucces('Team Deleted', 'Click OK To continue', 'success', '/dashboard/team');
  },
  add({Meteor, LocalState}, teamName){
    console.log(teamName);
  },
  clearErrors({LocalState}) {
    return LocalState.set('UPDATE_TEAM_ERROR', null);
  }

}
