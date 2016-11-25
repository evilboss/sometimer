import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Assignproject from '../../components/manage_managers/assignproject.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const err = LocalState.get('UPDATE_TEAM_ERROR');
  onData(null, {err});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  assignTeam: actions.team_actions.assignTeam,
  clearErrors: actions.team_actions.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Assignproject);
