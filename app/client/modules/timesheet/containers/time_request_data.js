import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TimeRequestData from '../components/time_request_data.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  updateLog: actions.timesheet.updateLog,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TimeRequestData);
