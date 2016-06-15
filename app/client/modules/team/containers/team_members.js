import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import TeamMembers from '../components/create_team/forms/team_members.jsx';
import {DocDict} from '/lib/local-data/reactive-dict';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const newTeam = DocDict.get('teamDocument');
  const team = Collections.Team;
  const path = Meteor.absoluteUrl();
  onData(null, {team, newTeam, path});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TeamMembers);
