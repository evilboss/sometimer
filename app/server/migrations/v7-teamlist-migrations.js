import {Teamlist} from '/lib/collections';
/*Migrations.add({
  version: 7,
  name: 'Add Team list to app',
  up: function () {
    loadStaffList();
  },
  down: function () {
    removeAllStaffList();
  }
});*/
const defaultstafflist = ['aaron.randrup@ezyva.com', 'manager@manager.com', 'staff@staff.com', 'jr@ezyva.com'];
const loadStaffList = ()=> {
  console.info('Loading stafflist');
  let useridList = [];
  Meteor._sleepForMs(5000);
  const owner = Meteor.users.findOne({'emails.address': {$regex: 'manager@manager.com', $options: 'i'}});
  if (owner) {
    console.log('owner found', owner);
    _.each(defaultstafflist, function (staffEmail) {
      const staff = Meteor.users.findOne({'emails.address': {$regex: staffEmail, $options: 'i'}});
      useridList.push(staff._id);
    });
    Teamlist.insert({owner: owner._id, stafflist: useridList});
  }
};
const removeAllStaffList = ()=> {
  console.info('removing stafflist');
  Meteor._sleepForMs(5000);
  const owner = Meteor.users.findOne({'emails.address': {$regex: 'manager@manager.com', $options: 'i'}});
  if (owner) {
    console.log('owner found', owner);
    let currentTeamList = Teamlist.find({owner: owner._id}).fetch();
    _.each(currentTeamList, function (teamlist) {
      Teamlist.remove(teamlist._id);
    })
  }
};

export {
  loadStaffList, removeAllStaffList
};