import {Timelogs, Team} from '/lib/collections';
import moment from 'moment/moment';

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {
  Meteor.methods({
    'download.csv'(selectedUserId, from, to) {
      console.log('Generatign CSV', selectedUserId, from, to);
      const dateFrom = moment(from).format('DD:MM:YY');
      const dateTo = moment(to).format('DD:MM:YY');
      const selector = {userId: selectedUserId, date: {$gte: dateFrom, $lte: dateTo}};
      const timelogs = Timelogs.find(selector).fetch();
      const collection = (timelogs) ? timelogs : [{"status": "invalid date"}];
      return exportcsv.exportToCSV(collection);

    },
    'download.team.csv'(teamId, from, to) {
      const team = Team.findOne(teamId);
      const timeLogSelector = (team) ?
      {
        createdAt: {$gte: moment(from, 'LL').toDate(), $lte: moment(to, 'LL').toDate()},
        userId: {$in: team.members},
        completed: true
      } : {_id: 'none'};
      const timelogs = Timelogs.find(timeLogSelector).fetch();
      return exportcsv.exportToCSV(timelogs);

    },
    'download.team.summary.csv'(teamId, from, to) {
      const team = Team.findOne(teamId);
      const collection = [{sample: '1'}, {sample: 2}];
      return exportcsv.exportToCSV(collection);
    }

  });
}
