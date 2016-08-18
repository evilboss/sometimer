import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Timesheet from '../components/timesheet.jsx';
export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe("timesheet_data").ready && Meteor.subscribe("user.current").ready) {
    console.log(userId);
    console.log(Meteor.users.find().fetch());
    const currentUser = (userId) ? Meteor.users.findOne({_id: userId}) : Meteor.user();
    console.log(currentUser);
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
