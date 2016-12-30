import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Summary from '../components/summary.jsx';

export const composer = ({context, team, teamId, from, to}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.team.approval', teamId, from, to).ready];
  const dataReady = () => {
    let summaryList = [];
    _.each(team.members, (staffId)=> {
      const timelogs = Collections.Timelogs.find({userId: staffId}).fetch();
      _.each(timelogs, (log)=> {
        console.log(log.totalBreak, (log.totalBreak), log.totalRendered, (log.totalRendered));
      });
      summaryList.push({
        _id: staffId, totalBreak: '2:22', totalHours: '40:00'
      });
    });
    onData(null, {summaryList});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  exportLogs: actions.timesheet.exportLogs,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Summary);
