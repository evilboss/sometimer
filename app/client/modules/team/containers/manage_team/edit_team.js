import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import EditTeam from '../../components/manage_team/edit_team.jsx';

export const composer = ({context, clearErrors, teamId}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  let subscriptionReady = [Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready(), Meteor.subscribe('users.allStaff', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    const error = LocalState.get('UPDATE_TEAM_ERROR');
    let team = Collections.Team.findOne(teamId);
    const selector = {'profile.role': 'staff'};
    const managerSelector = {'profile.role': 'manager'};
    const adminSelector = {'profile.role': 'admin'};
    let options = {_id: {$ne: Meteor.userId()}};
    const managerList = Meteor.users.find(managerSelector, options).fetch();
    const adminList = Meteor.users.find(adminSelector, options).fetch();
    let staffList = Meteor.users.find(selector, options).fetch();
    onData(null, {staffList, managerList, adminList, team, error});
  };
  (subscriptionReady) ? dataReady() : onData();
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  update: actions.team_actions.update,
  deleteTeam: actions.team_actions.deleteTeam,
  transferTeam:actions.team_actions.transferTeam,
  clearErrors: actions.team_actions.clearErrors,
  context: () => context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditTeam);
