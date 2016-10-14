import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Timedata from '../components/timedata.jsx';
import moment from 'moment';

export const composer = ({context, date, userId, keyIndex, selectedUser}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.by.date', moment(date).format('DD:MM:YY'), userId).ready];
  if (subscriptionReady) {
    const err = LocalState.get('TIMESHEET_ERROR');
    const selector = {date: moment(date).format('DD:MM:YY'), userId: userId};
    const activeRole = Meteor.user().profile.role;
    const timelog = Collections.Timelogs.findOne(selector);
    onData(null, {err, timelog, selectedUser, activeRole, keyIndex});
  } else {
    onData();
  }

};


export const depsMapper = (context, actions) => ({
  update: actions.timesheet.update,
  clearErrors: actions.timesheet.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Timedata);
