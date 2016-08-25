import {Teamlist} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('teamlist', function () {
    let stafflist = [];
    const ownerOptions = {owner: this.userId};
    const teamList = Teamlist.find(ownerOptions).fetch();
    _.each(teamList, function (team) {
      stafflist = _.union(stafflist, team.stafflist);
    });
    const currentUser = Meteor.users.findOne(this.userId);
    const teamOptions =
      (currentUser) ?
        (currentUser.profile) ?
          (currentUser.profile.role == 'admin') ? {}
            : {_id: {$in: stafflist}}
          : {_id: {$in: stafflist}}
        : {_id: {$in: stafflist}};
    return [Teamlist.find(ownerOptions), Meteor.users.find(teamOptions)];
  });
}
