import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EditTeam from '../../components/manage_team/edit_team.jsx';

export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('team.members', teamId).ready()) {
    const team = Collections.Team.findOne(teamId);
    const members = (team) ? (team.members) ? team.members : [] : [];
    const options = {_id: {$ne: Meteor.userId()}, _id: {$in: members}};
    const staffList = Meteor.users.find(options).fetch();
    onData(null, {staffList, team});
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
)(EditTeam);