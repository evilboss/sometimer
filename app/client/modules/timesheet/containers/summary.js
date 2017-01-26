import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Summary from '../components/summary.jsx';
import {addTime} from '/lib/lib/time';
const getSummaryTotal = (timelogs)=> {
  let summaryTotal = '00:00:00';
  _.each(timelogs, (log)=> {
    summaryTotal = addTime(summaryTotal, log.totalRendered);
  });
  return summaryTotal;
};
export const composer = ({context, team, teamId, from, to}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.team.approved', teamId, from, to).ready];
  const dataReady = () => {
    let summaryList = [];
    _.each(team.members, (staffId)=> {
      const timelogs = Collections.Timelogs.find({userId: staffId, approved: true}).fetch();
      console.log(timelogs);
      summaryList.push({
        _id: staffId, timelogs: timelogs, totalBreak: "00:00:00", totalHours: "00:00:00"
      });
    });
    (_.isEmpty(summaryList)) ? onData() : onData(null, {summaryList, addTime});
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
