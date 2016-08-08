import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Timedata from '../components/timedata.jsx';

export const composer = ({context, date, userId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('timelogs.by.date', date, userId).ready) {
    const selector = {date: date, userId: userId};
    const timelog = Collections.Timelogs.findOne(selector)
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
)(Timedata);
