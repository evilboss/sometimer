import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import TeamList from '../../components/manage_team/team_list.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('team.list').ready()) {
    const teamList = Collections.Team.find().fetch();
    const currentUser = Meteor.user();
    onData(null, {teamList, currentUser});
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