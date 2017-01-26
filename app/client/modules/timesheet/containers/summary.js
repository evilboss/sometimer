import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import moment from 'moment/moment';
import Summary from '../components/summary.jsx';
import {addTime} from '/lib/lib/time';
export const composer = ({context, team, teamId, from, to}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.team.approved', teamId, from, to).ready];
  const format = 'YYYY-MM-DD HH:mm:ss';
  const dataReady = () => {
    let summaryList = [];
    _.each(team.members, (staffId) => {
      const timelogs = Collections.Timelogs.find({
        userId: staffId, approved: true, createdAt: {
          $gte: moment(from, 'LL').hour(0).minute(0).format(format),
          $lte: moment(to, 'LL').hour(23).minute(59).format(format)
        },
      }).fetch();
      summaryList.push({
        _id: staffId, timelogs: timelogs, totalBreak: "00:00", totalHours: "00:00"
      });
    });
    (_.isEmpty(summaryList)) ? onData() : onData(null, {summaryList, addTime});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  exportLogs: actions.timesheet.exportLogs,
  exportSummary: actions.timesheet.exportSummary,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Summary);
