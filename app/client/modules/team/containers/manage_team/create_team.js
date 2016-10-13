import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CreateTeam from '../../components/manage_team/create_team.jsx';
/*TODO: @aaron add new team */
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const team = Collections.Team;
  onData(null, {team});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateTeam);
