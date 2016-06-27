import {Timelogs} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {dtr} from './dtr/dtr';
export default function () {
  Meteor.methods({
    'timelogs.change-status'(){
      let currentUser = Meteor.users.findOne({_id: Meteor.userId()});
      let status = currentUser.profile.status;
      dtr.changeStatus(status);

    }

  });
}
