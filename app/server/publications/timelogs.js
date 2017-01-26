import {Timelogs, Teamlist, Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import moment from 'moment-timezone';
import {check} from 'meteor/check';
import {auth} from "/server/methods/auth/auth";
import {getDates, generateDateToday} from '/server/methods/timeDate/timeDate';

export default function () {
  Meteor.publish('timelogs', (userId) => {
    return Timelogs.find({userId: userId});
  });
  Meteor.publish('timelogs.by.date', (date, userId) => {
    const selector = {date: date, userId: userId};
    return Timelogs.find(selector);
  });
  Meteor.publish('timelogs.by.id', (timeLogId) => {
    const selector = {_id: timeLogId};
    return Timelogs.find(selector);
  });
  Meteor.publish('timelogs.by.range', (from = null, to = null) => {
    const {day, month, year} = generateDateToday();
    const startDate = (from) ? from : (day <= 15) ? moment([year, month]).add(-1, "month") : moment(moment([year, month]).add(-1, "month")).add(15, "days");
    const endDate = (to) ? moment(to) : (day <= 15) ? moment(startDate).add(14, "days") : moment(startDate).endOf('month');
    const selector = {createdAt: {$gte: startDate, $lte: endDate}, completed: true};
    return Timelogs.find(selector);
  });
//Note this userId only works in function calls classic, having issues on es6 code
  Meteor.publish('timelogs.approval', function (from, to) {
    console.log('subscribing to timelogs', moment(from).toDate(), moment(to).toDate());
    let staffList = [];
    const teamSelector = (auth.isAdmin(this.userId)) ? {
        creator: this.userId
      } : (auth.isManager(this.userId)) ? {teamLeader: this.userId} :
        {_id: 'nonexistend'};
    const teams = Team.find(teamSelector).fetch();

    _.each(teams, (team) => {
      (team.members) ?
        staffList.push.apply(staffList, team.members)
        :
        '';
    });
    const timeLogUserIds = _.uniq(staffList);
    const timeLogSelector = (timeLogUserIds) ?
      {
        createdAt: {$gte: moment(from, 'LL').toDate(), $lte: moment(to, 'LL').toDate()},
        userId: {$in: timeLogUserIds},
        completed: true
      } : {_id: 'none'};
    return Timelogs.find(timeLogSelector);
  });
  Meteor.publish('timelogs.team.approval', function (teamId) {
    const team = Team.findOne(teamId);

    const timeLogSelector = (team) ?
      {
        userId: {$in: team.members},
        completed: true
      } : {_id: 'none'};
    return Timelogs.find(timeLogSelector);
  });
  Meteor.publish('timelogs.team.approved', function (teamId, from, to) {
    const team = Team.findOne(teamId);
    const format = 'YYYY-MM-DD HH:mm:ss';
    const timeLogSelector = (team) ?
      {
        createdAt: {
          $gte: moment(from, 'LL').hour(0).minute(0).format(format),
          $lte: moment(to, 'LL').hour(23).minute(59).format(format)
        },
        userId: {$in: team.members},
        completed: true,
        approved: true
      } : {_id: 'none'};
    return Timelogs.find(timeLogSelector);
  });
}
