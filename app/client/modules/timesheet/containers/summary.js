import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Summary from '../components/summary.jsx';
import {addTime} from '/lib/lib/time';
export const composer = ({context, team, teamId, from, to}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.team.approval', teamId, from, to).ready];
  const dataReady = () => {
    let summaryList = [];
    _.each(team.members, (staffId)=> {
      const timelogs = Collections.Timelogs.find({userId: staffId}).fetch();
      let summaryBreak = '00:00:00';
      let summaryTotal = '00:00:00';
      _.each(timelogs, (log)=> {
        summaryBreak = addTime(summaryBreak, log.totalBreak);
        summaryTotal = addTime(summaryBreak, log.totalRendered);
      });
      summaryList.push({
        _id: staffId, totalBreak: summaryBreak, totalHours: summaryTotal
      });
    });
    (_.isEmpty(summaryList)) ? onData() : onData(null, {summaryList});
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
