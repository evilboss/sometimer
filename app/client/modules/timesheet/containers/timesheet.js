import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Timesheet from '../components/timesheet.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe("timelogs", Meteor.userId()).ready && Meteor.subscribe("user.current").ready) {
    const timelogs = Collections.Timelogs.find().fetch();
    const currentUser = Meteor.user();

    onData(null, {timelogs, currentUser});
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
