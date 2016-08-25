import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Timedata from '../components/timedata.jsx';
import moment from 'moment';

export const composer = ({context, date, userId, keyIndex, selectedUser}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.by.date', moment(date).format('DD:MM:YY'), userId).ready];
  if (subscriptionReady) {
    const selector = {date: moment(date).format('DD:MM:YY'), userId: userId};
    const activeRole = Meteor.user().profile.role;
    const timelog = Collections.Timelogs.findOne(selector);
    onData(null, {timelog, selectedUser, activeRole, keyIndex});
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
)(Timedata);
