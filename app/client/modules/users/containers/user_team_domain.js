import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import UserTeamDomain from '../components/user_team_domain.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const path = Meteor.absoluteUrl();
  onData(null, {path});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UserTeamDomain);
