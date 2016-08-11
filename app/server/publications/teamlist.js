import {Teamlist} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('teamlist', function (ownerId) {
    let stafflist = [];
    const ownerOptions = {owner: ownerId};
    const teamList = Teamlist.find(ownerOptions).fetch();
    _.each(teamList, function (team) {
      stafflist = _.union(stafflist, team.stafflist);
    });
    const teamOptions = {_id: {$in: stafflist}};
    return [Teamlist.find(ownerOptions), Meteor.users.find(teamOptions)];
  });
}
