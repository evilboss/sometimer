import {Timelogs, Team} from '/lib/collections';
import moment from 'moment/moment';
import {timelogs} from '/server/methods/timelogs/timelogs';
import {Meteor} from 'meteor/meteor';
import {summation, formatSeconds} from '/lib/lib/time';

import {check} from 'meteor/check';
export default function () {
  Meteor.methods({
    'download.csv'(selectedUserId, from, to) {
      const format = 'YYYY-MM-DD HH:mm:ss';

      console.log('Generatign CSV', selectedUserId, from, to);
      const selector = {
        userId: selectedUserId, createdAt: {
          $gte: moment(from, 'LL').hour(0).minute(0).format(format),
          $lte: moment(to, 'LL').hour(23).minute(59).format(format)
        }
      };
      const logs = logs.find(selector).fetch();
      const collection = (logs) ? logs : [{"status": "invalid date"}];
      return exportcsv.exportToCSV(collection);

    },
    'download.team.csv'(teamId, from, to) {
      const format = 'YYYY-MM-DD HH:mm:ss';
      console.log('downloading timesheet');
      const team = Team.findOne(teamId);
      const timeLogSelector = (team) ?
        {
          createdAt: {
            $gte: moment(from, 'LL').hour(0).minute(0).format(format),
            $lte: moment(to, 'LL').hour(23).minute(59).format(format)
          },
          userId: {$in: team.members},
          completed: true
        } : {_id: 'none'};
      const logs = Timelogs.find(timeLogSelector).fetch();
      return exportcsv.exportToCSV(logs);

    },
    'download.team.summary.csv'(teamId, from, to, summaryList) {
      const format = 'YYYY-MM-DD';
      console.log('downloading summary');
      let summaryLogs = [];

      const team = Team.findOne(teamId);
      _.each(summaryList, (staff) => {
        let user = timelogs.getTimeLogId(staff._id);
        summaryLogs.push({
          UserID: staff._id,
          FirstName: user.firstName,
          LastName: user.lastName,
          TotalBreaks: (formatSeconds((_.isEmpty(staff.timelogs)) ? 0 : summation(staff.timelogs, 'totalBreak'))),
          TotalHoursRendered: (formatSeconds((_.isEmpty(staff.timelogs)) ? 0 : summation(staff.timelogs, 'totalRendered'))),

          Period: `${moment(from, 'LL').format(format)} to ${moment(to, 'LL').format(format)}`
        });
      });
      return exportcsv.exportToCSV(summaryLogs);
    }

  });
}
