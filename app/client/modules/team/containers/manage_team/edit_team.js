import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import EditTeam from '../../components/manage_team/edit_team.jsx';

export const composer = ({context, clearErrors, teamId}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  let subscriptionReady = [Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    const error = LocalState.get('UPDATE_TEAM_ERROR');
    let team = Collections.Team.findOne(teamId);
    let options = {_id: {$ne: Meteor.userId()}};
    let staffList = Meteor.users.find(options).fetch();
    onData(null, {staffList, team, error});
  };
  (subscriptionReady) ? dataReady() : onData();
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  update: actions.team_actions.update,
  clearErrors: actions.team_actions.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditTeam);
