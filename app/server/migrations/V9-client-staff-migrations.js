/**
 * Created by jr on 8/26/16.
 */
import {Teamlist} from '/lib/collections';
Migrations.add({
  version: 9,
  name: 'Add Stafflist to client',
  up: function () {
    loadStaffs();
  },
  down: function () {
    removeStaffs();
  }
});

const defaultStafflist = ['aaron.randrup@ezyva.com', 'manager@manager.com', 'jr@ezyva.com', 'dan.arceo@ezyva.com', 'kimberly.ocariz@ezyva.com'];
const loadStaffs = ()=> {
  console.info('Loading stafflist');
  let useridList = [];
  Meteor._sleepForMs(5000);
  const owner = Meteor.users.findOne({'emails.address': {$regex: 'client@client.com', $options: 'i'}});
  if (owner) {
    console.log('owner found', owner);
    _.each(defaultStafflist, function (staffEmail) {
      const staff = Meteor.users.findOne({'emails.address': {$regex: staffEmail, $options: 'i'}});
      useridList.push(staff._id);
    });
    Teamlist.insert({owner: owner._id, stafflist: useridList});
  }
};
const removeStaffs = ()=> {
  console.info('removing stafflist');
  Meteor._sleepForMs(5000);
  const owner = Meteor.users.findOne({'emails.address': {$regex: 'client@client.com', $options: 'i'}});
  if (owner) {
    console.log('owner found', owner);
    let currentTeamList = Teamlist.find({owner: owner._id}).fetch();
    _.each(currentTeamList, function (teamlist) {
      console.log(teamlist);
      Teamlist.remove(teamlist._id);
    })
  }
};
