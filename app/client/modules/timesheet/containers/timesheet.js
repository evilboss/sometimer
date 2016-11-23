import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Loader from '/client/utils/loader/loader';
import Timesheet from '../components/timesheet.jsx';
export const composer = ({context, userId, teamId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionsReady = [Meteor.subscribe("staff.timesheet", userId).ready, Meteor.subscribe("user.current").ready, (teamId) ? Meteor.subscribe('team.members', teamId).ready : true];
  if (subscriptionsReady) {
    const teamName = (teamId) ? (Collections.Team.findOne(teamId)) ? Collections.Team.findOne(teamId).name : '' : '';
    const currentUser = (userId) ? Meteor.users.findOne({_id: userId}) : Meteor.user();
    onData(null, {currentUser, teamName});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(Timesheet);
