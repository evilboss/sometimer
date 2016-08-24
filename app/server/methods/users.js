import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const updatePhoto = (id, imgPath)=> {
  Meteor.users.update({_id: id}, {$set: {'profile.displayPhoto': imgPath}})
};
export default function () {
  Meteor.methods({
    'user.update-photo'(id, imgPath){
      updatePhoto(id, imgPath);
    }
  });
}
