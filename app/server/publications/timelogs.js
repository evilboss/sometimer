import {Timelogs, Teamlist} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import moment from 'moment/moment';
import {check} from 'meteor/check';
import {getDates, generateDateToday} from '/server/methods/timeDate/timeDate';

export default function () {
  Meteor.publish('timelogs', (userId)=> {
    return Timelogs.find({userId: userId});
  });
  Meteor.publish('timelogs.by.date', (date, userId)=> {
    const selector = {date: date, userId: userId};
    return Timelogs.find(selector);
  });
  Meteor.publish('timelogs.by.id', (timeLogId)=> {
    const selector = {_id: timeLogId};
    return Timelogs.find(selector);
  });
  Meteor.publish('timelogs.by.range', (from = null, to = null)=> {
    const {day, month, year} = generateDateToday();
    const startDate = (from) ? from : (day <= 15) ? moment([year, month]).add(-1, "month") : moment(moment([year, month]).add(-1, "month")).add(15, "days");
    const endDate = (to) ? moment(to) : (day <= 15) ? moment(startDate).add(14, "days") : moment(startDate).endOf('month');
    const selector = {createdAt: {$gte: startDate, $lte: endDate}, completed: true};
    return Timelogs.find(selector);
  });
//Note this userId only works in function calls classic, having issues on es6 code
  Meteor.publish('timelogs.approval', function () {
    let stafflist = [];
    const ownerOptions = {owner: this.userId};
    const teamList = Teamlist.find(ownerOptions).fetch();
    _.each(teamList, function (team) {
      stafflist = _.union(stafflist, team.stafflist);
    });
    const currentUser = Meteor.users.findOne(this.userId);
    const timeLogOptions =
      (currentUser) ?
        (currentUser.profile) ?
          (currentUser.profile.role == 'admin') ? {}
            : {userId: {$in: stafflist}, completed: true}
          : {userId: {$in: stafflist}, completed: true}
        : {userId: {$in: stafflist}, completed: true};
    return Timelogs.find(timeLogOptions);
  });
}
