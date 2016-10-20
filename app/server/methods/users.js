import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {remotivUser} from './user/remotiv_user';
export default function () {
  Meteor.methods({
    'user.update-photo'(id, imgPath){
      remotivUser.updatePhoto(id, imgPath);
    },
    'user.update-permissions'(id, permissions){
      remotivUser.update(id, 'profile.permissions', permissions);
    },
    'users.add'(user){
      remotivUser.addNew(user);
    },
    'users.update.profile'(userId, profile){
      _.each(profile, function (value, key) {
        remotivUser.update(userId, `profile.${key}`, value);
      });
    }
  });
}
