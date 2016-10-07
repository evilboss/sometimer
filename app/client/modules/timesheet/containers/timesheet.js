import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Timesheet from '../components/timesheet.jsx';
export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionsReady = [Meteor.subscribe("staff.timesheet", userId).ready, Meteor.subscribe("user.current").ready];
  if (subscriptionsReady) {
    const currentUser = (userId) ? Meteor.users.findOne({_id: userId}) : Meteor.user();
    onData(null, {currentUser});
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
)(Timesheet);
