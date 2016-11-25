import {Timelogs, Teamlist, Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import moment from 'moment/moment';
import {check} from 'meteor/check';
import {auth} from "/server/methods/auth/auth";
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
    let staffList = [];
    const teamSelector = (auth.isAdmin(this.userId)) ? {
      teamLeader: {$exists: false},
      creator: this.userId
    } : (auth.isManager(this.userId)) ? {teamLeader: this.userId} :
    {_id: 'nonexistend'};
    console.log('teamselector', teamSelector);
    const teams = Team.find(teamSelector).fetch();
    console.log('the teams', teams);
    _.each(teams, (team)=> {
      console.log(team);
      console.log('team mb', team.members);
      (team.members) ?
        staffList.push.apply(staffList, team.members)
        :
        '';
    });
    const timeLogUserIds = _.uniq(staffList);
    const timeLogOptions = (timeLogUserIds) ?
    {
      userId: {$in: timeLogUserIds},
      approved: {$exists: false},
      completed: true
    } : {_id: 'none'};
    return Timelogs.find(timeLogOptions);
  });
}
