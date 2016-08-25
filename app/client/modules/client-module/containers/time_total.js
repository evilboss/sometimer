import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import moment from 'moment';

import TimeTotal from '../components/time_total.jsx';

export const composer = ({context, date, userId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.by.date', moment(date).format('DD:MM:YY'), userId).ready];
  if (subscriptionReady) {
    const selector = {userId: userId};
    const timelog = Collections.Timelogs.findOne(selector);
    onData(null, {timelog});
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
)(TimeTotal);
