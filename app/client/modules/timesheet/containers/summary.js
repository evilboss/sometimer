import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Summary from '../components/summary.jsx';

export const composer = ({context,teamId, from, to}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  exportLogs: actions.timesheet.exportLogs,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Summary);
