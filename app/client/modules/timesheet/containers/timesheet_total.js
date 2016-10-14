import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import TimesheetTotal from '../components/timesheet_total.jsx';
export const composer = ({context, from, to}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.by.range', from, to)];
  if (subscriptionReady) {
    const timelogs = Collections.Timelogs.find().fetch();
    onData(null, {timelogs});
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
)(TimesheetTotal);