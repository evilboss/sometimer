import {Teamlist} from '/lib/collections';
Migrations.add({
  version: 7,
  name: 'Add Team list to app',
  up: function () {
    loadStaffList();
  },
  down: function () {
    removeAllStaffList();
  }
});
const defaultstafflist = ['aaron.randrup@ezyva.com', 'manager@manager.com', 'staff@staff.com', 'jr@ezyva.com'];
const loadStaffList = ()=> {
  console.info('Loading stafflist');
  if (Teamlist.find({}).count() === 0) {
    let useridList = [];
    const owner = Meteor.users.findOne({'emails.address': {$regex: 'manager@manager.com', $options: 'i'}});
    if (owner) {
      _.each(defaultstafflist, function (staffEmail) {
        const staff = Meteor.users.findOne({'emails.address': {$regex: staffEmail, $options: 'i'}});
        useridList.push(staff._id);
      });
      Teamlist.insert({owner: owner._id, stafflist: useridList});
    }
  }
};
const removeAllStaffList = ()=> {

  console.info('removing stafflist');
  if (Teamlist.find({}).count() === 0) {
    let useridList = [];
    const owner = Meteor.users.findOne({'emails.address': {$regex: 'manager@manager.com', $options: 'i'}});
    if (owner) {
      let currentTeamList = Teamlist.find({ownerId: owner._id});
      _.each(currentTeamList, function (teamlist) {
        Teamlist.remove(teamlist._id);
      })
    }
  }
};

export {
  loadStaffList, removeAllStaffList
};