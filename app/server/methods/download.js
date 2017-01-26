import {Timelogs, Team} from '/lib/collections';
import moment from 'moment/moment';
import {timelogs} from '/server/methods/timelogs/timelogs';
import {Meteor} from 'meteor/meteor';
import {summation, formatSeconds} from '/lib/lib/time';

import {check} from 'meteor/check';
export default function () {
  Meteor.methods({
    'download.csv'(selectedUserId, from, to, staffLogs) {
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
    'download.team.csv'(teamId, from, to, teamLogs) {
      const format = 'YYYY-MM-DD HH:mm:ss';
      const displayFormat = 'hh:mm A z';

      console.log('downloading timesheet');
      let exportTeamLogs = [];
      _.each(teamLogs, (staff) => {
        let user = timelogs.getTimeLogId(staff.userId);
        exportTeamLogs.push({
          UserId: staff.userId,
          FirstName: user.firstName,
          LastName: user.lastName,
          Date: staff.date,
          TimeIn: moment(staff.timeIn).tz((user.timezone) ? user.timezone : 'Asia/Manila').format(displayFormat),
          TimeOut: moment(staff.timeOut).tz((user.timezone) ? user.timezone : 'Asia/Manila').format(displayFormat),
          TotalBreak: (formatSeconds((staff.totalBreak) ? staff.totalBreak : 0)),
          TotalHoursRendered: (formatSeconds((staff.totalRendered) ? staff.totalRendered : 0))
        });
      });
      return exportcsv.exportToCSV(exportTeamLogs);

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
