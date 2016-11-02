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
      email: "admin@remotiv.io",
      password: "password",
      profile: {
        firstName: 'Admin',
        lastName: 'Nistrator',
        department: 'Admin',
        staffType: 'Regular',
        jobTitle: 'Administrator',
        displayPhoto: '/uploads/defaults/teams/default/profiles/admin/admin.gif',
        role: 'super-admin',
        permissions: [
          'createClients', 'readClients', 'updateClients', 'deleteClients',
          'createStaffs', 'readStaffs', 'updateStaffs', 'deleteStaffs',
          'createManagers', 'readManagers', 'updateManagers', 'deleteManagers',
          'createLeaders', 'readLeaders', 'updateLeaders', 'deleteLeaders',
          'createAdmin', 'readAdmin', 'updateAdmin', 'deleteAdmin',
          'createTeam', 'readTeam', 'updateTeam', 'deleteTeam',
          'createProject', 'readProject', 'updateProject', 'deleteProject',
          'createSubProject', 'readSubProject', 'updateSubProject', 'deleteSubProject',
          'createTask', 'readTask', 'updateTask', 'deleteTask',
          'updatePermissions',
        ],
        status: 'completed',
        site: 'remote',
      }
    });
    Accounts.createUser({
      email: "notifications@remotiv.io",
      password: "password",
      profile: {
        firstName: 'Notification',
        lastName: 'Admin',
        department: 'Admin',
        staffType: 'Regular',
        jobTitle: 'Manager',
        displayPhoto: '/uploads/defaults/teams/default/profiles/manager/joker.jpg',
        role: 'admin',
        permissions: [
          'createClients', 'readClients', 'updateClients', 'deleteClients',
          'createStaffs', 'readStaffs', 'updateStaffs', 'deleteStaffs',
          'createManagers', 'readManagers', 'updateManagers', 'deleteManagers',
          'createLeaders', 'readLeaders', 'updateLeaders', 'deleteLeaders',
          'createAdmin', 'readAdmin', 'updateAdmin', 'deleteAdmin',
          'createTeam', 'readTeam', 'updateTeam', 'deleteTeam',
          'createProject', 'readProject', 'updateProject', 'deleteProject',
          'createSubProject', 'readSubProject', 'updateSubProject', 'deleteSubProject',
          'createTask', 'readTask', 'updateTask', 'deleteTask',
          'updatePermissions',
        ],
        status: 'completed',
        site: 'remote',
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
        displayPhoto: '/uploads/defaults/teams/default/profiles/manager/joker.jpg',
        role: 'manager',
        permissions: [
          'createClients', 'readClients', 'updateClients', 'deleteClients',
          'createStaffs', 'readStaffs', 'updateStaffs', 'deleteStaffs',
          'createManagers', 'readManagers', 'updateManagers', 'deleteManagers',
          'createLeaders', 'readLeaders', 'updateLeaders', 'deleteLeaders',
          'createTeam', 'readTeam', 'updateTeam', 'deleteTeam',
          'createProject', 'readProject', 'updateProject', 'deleteProject',
          'createSubProject', 'readSubProject', 'updateSubProject', 'deleteSubProject',
          'createTask', 'readTask', 'updateTask', 'deleteTask',
        ],
        status: 'completed',
        site: 'remote',
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
        displayPhoto: '/uploads/defaults/teams/default/profiles/staff/rick.jpg',
        role: 'staff',
        permissions: [
          'readStaffs',
          'readManagers',
          'readLeaders',
          'readTeam',
          'readProject',
          'readSubProject',
          'readTask',
        ],
        status: 'completed',
        site: 'remote'

      }
    });
    Accounts.createUser({
      email: "client@client.com",
      password: "password",
      profile: {
        firstName: ' Jack',
        lastName: 'Torrance',
        department: 'Admin',
        staffType: 'Regular',
        jobTitle: 'client',
        displayPhoto: '/uploads/defaults/teams/default/profiles/jack/JackTorrance.jpg',
        role: 'client',
        permissions: [
          'readStaffs',
          'readManagers',
          'readLeaders',
          'readTeam',
          'readProject',
          'readSubProject',
          'readTask',
        ],
        status: 'completed',
        site: 'remote',

      }
    });
    Accounts.createUser({
      email: "ceo@ceo.com",
      password: "password",
      profile: {
        firstName: ' Ryo',
        lastName: 'Takatsuki',
        department: 'Admin',
        staffType: 'Regular',
        jobTitle: 'CEO',
        role: 'admin',
        permissions: [
          'createClients', 'readClients', 'updateClients', 'deleteClients',
          'createStaffs', 'readStaffs', 'updateStaffs', 'deleteStaffs',
          'createManagers', 'readManagers', 'updateManagers', 'deleteManagers',
          'createLeaders', 'readLeaders', 'updateLeaders', 'deleteLeaders',
          'createAdmin', 'readAdmin', 'updateAdmin', 'deleteAdmin',
          'createTeam', 'readTeam', 'updateTeam', 'deleteTeam',
          'createProject', 'readProject', 'updateProject', 'deleteProject',
          'createSubProject', 'readSubProject', 'updateSubProject', 'deleteSubProject',
          'createTask', 'readTask', 'updateTask', 'deleteTask',
        ]
      },
      status: 'completed',
      site: 'remote',
    });
  }
};
const removeAllUsers = ()=> {
  console.info('Removing Users');
  const innitalUsers = ['admin@admin.com', 'manager@manager.com', 'staff@staff.com', 'client@client.com'];
  _.each(innitalUsers, function (userEmail) {
    const removeUser = Meteor.users.findOne({'emails.address': {$regex: userEmail, $options: 'i'}});
    if (removeUser) {
      Meteor.users.remove(removeUser._id);
    }

  });
};