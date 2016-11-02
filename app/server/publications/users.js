import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {auth} from '/server/methods/auth/auth';
export default function () {
  Meteor.publish('user.current', function () {
    return Meteor.users.find({_id: this.userId});
  });
  Meteor.publish('user.name.by.id', function (usersId) {
    return Meteor.users.find({_id: usersId});
  });
  Meteor.publish('users.allstaff', function (site) {
      const selector = (site) ?
      {'profile.role': 'staff', 'profile.site': site} :
        (auth.isSuperAdmin(this.userId))
          ? {'profile.role': 'staff', 'profile.site': site}
          : {'_id': 'none'};
      console.log(selector);
      return Meteor.users.find(selector);
    }
  )
  ;
  Meteor.publish('users.allClients', function () {
    return Meteor.users.find({'profile.role': 'client'});
  });
}
