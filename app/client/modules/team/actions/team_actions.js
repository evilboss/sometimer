import {sweetPrompts} from '/client/utils/helpers/sweet-helper';
const updateTeam = (id, team)=> {
  Meteor.call('team.update', id, team);
  sweetPrompts.sweetSucces('Team Updated', 'Click OK To continue', 'success');
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
  deleteTeam({Meteor, LocalState}, teamId) {
    Meteor.call('team.remove', teamId)
  },
  clearErrors({LocalState}) {
    return LocalState.set('UPDATE_TEAM_ERROR', null);
  }

}