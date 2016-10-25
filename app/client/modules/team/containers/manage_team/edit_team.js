import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EditTeam from '../../components/manage_team/edit_team.jsx';

export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionReady = [Meteor.subscribe('team.list', teamId).ready()];
  const dataReady = ()=> {
    let team = Collections.Team.findOne(teamId);
    let options = {_id: {$ne: Meteor.userId()}};
    let staffList = Meteor.users.find(options).fetch();
    onData(null, {staffList, team});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditTeam);
