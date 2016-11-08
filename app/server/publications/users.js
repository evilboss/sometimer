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
      const selector = (site) ? {
        'profile.role': 'staff',
        'profile.site': site
      } : {'_id': 'none'};
      console.log(selector);
      console.log(Meteor.users.find(selector).fetch());
      return Meteor.users.find(selector);
    }
  )
  ;
  Meteor.publish('users.allClients', function (site) {
    const selector = (site) ? {
      'profile.role': 'client',
      'profile.site': site
    } : {'_id': 'none'};
    return Meteor.users.find(selector);
  });
  Meteor.publish('users.allAdmins', function (site) {
    const selector = (site) ? {
      'profile.role': 'admin',
      'profile.site': site
    } : {'_id': 'none'};
    return Meteor.users.find(selector);
  });
  Meteor.publish('users.allManagers', function (site) {
    const selector = (site) ? {
      'profile.role': 'manager',
      'profile.site': site
    } : {'_id': 'none'};
    return Meteor.users.find(selector);
  });
  Meteor.publish('users.all', function (site) {
    const selector = (site) ? {
      'profile.site': site
    } : {'_id': 'none'};
    return Meteor.users.find(selector);
  });
}
