/**
 * Created by jr on 5/16/16.
 */
Migrations.add({
  version: 1,
  name: 'Add default users to app',
  up: function () {
    loadUsers();
  },
  down: function () {
    removeAllUsers();
  }
});
const loadUsers = ()=> {
  console.info('Loading users');
  if (Meteor.users.find({}).count() === 0) {
    console.info('migrating user admins');
    Accounts.createUser({
      email: "admin@admin.com",
      password: "password",
      profile: {
        firstName: 'Admin',
        lastName: 'Nistrator',
        department: 'Admin',
        staffType: 'Regular',
        jobTitle: 'Administrator',
        displayPhoto: 'defaults/default-img.png',
        role: 'admin'
      }
    });
    Accounts.createUser({
      email: "manager@manager.com",
      password: "password",
      profile: {
        firstName: 'Man',
        lastName: 'Mager',
        department: 'Admin',
        staffType: 'Regular',
        jobTitle: 'Manager',
        displayPhoto: 'defaults/default-img.png',
        role: 'manager'
      }
    });
    Accounts.createUser({
      email: "staff@staff.com",
      password: "password",
      profile: {
        firstName: 'St',
        lastName: 'Aff',
        department: 'Virtual Assistants',
        staffType: 'Regular',
        jobTitle: 'Virtual Assistant',
        displayPhoto: '/Assets/teams/default/profiles/admin/admin.gif',
        role: 'staff'
      }
    });
  }
};
const removeAllUsers = ()=> {
  console.info('Removing Users');
  const innitalUsers = ['admin@admin.com', 'manager@manager.com', 'staff@staff.com'];
  _.each(innitalUsers, function (userEmail) {
    const removeUser = Meteor.users.findOne({'emails.address': {$regex: userEmail, $options: 'i'}});
    if (removeUser) {
      Meteor.users.remove(removeUser._id);
    }

  });
};