import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TeamName from '../components/create_team/forms/team_name.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
    if (Meteor.subscribe('team.list').ready()) {
      const team = Collections.Team;
      onData(null, {team});
    }
  };

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TeamName);
