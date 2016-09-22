import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import TeamList from '../components/team_list.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('team.list').ready()) {
    const team = Collections.Team.find().fetch();
    const currentUser = Meteor.user();
    console.log(team);
    onData(null, {team, currentUser});
  } else {
    onData();
  }
};
export const depsMapper = (context, actions) => ({
  context: () => context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TeamList);