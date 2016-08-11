import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Timedata from '../components/timedata.jsx';
import moment from 'moment';

export const composer = ({context, date, userId,keyIndex,selectedUser}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('timelogs.by.date', moment(date).format('DD:MM:YY'), userId).ready) {
    const selector = {date: moment(date).format('DD:MM:YY'), userId: userId};
    const timelog = Collections.Timelogs.findOne(selector);
    onData(null, {timelog,selectedUser});
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
