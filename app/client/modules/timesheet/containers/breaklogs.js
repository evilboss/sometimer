import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Breaklogs from '../components/breaklogs.jsx';

export const composer = ({context, timeLogId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('breaks.timelog', timeLogId).ready, Meteor.subscribe('timelogs.by.id', timeLogId).ready]
  if (subscriptionReady) {
    const timeLog = Collections.Timelogs.findOne({_id: timeLogId});
    const breakLogs = Collections.Breaks.find().fetch();
    onData(null, {breakLogs, timeLog});
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
)(Breaklogs);
