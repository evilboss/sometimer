import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffTeams from '../components/staff_teams.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  profileUpdate: actions.staff_actions.profileUpdate,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffTeams);
