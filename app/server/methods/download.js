import {Timelogs} from '/lib/collections';
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

    }
  });
}
