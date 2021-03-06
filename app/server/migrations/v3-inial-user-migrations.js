/*Migrations.add({
  version: 3,
  name: 'Add Initial users to app',
  up: function () {
    loadStaff();
  },
  down: function () {
    removeStaff();
  }
});*/
const newStaffs = [
  {
    email: 'iob.tungul@ezyva.com',
    password: 'secretwalangclue',
    profile: {
      firstName: 'Iob Lorenzo',
      lastName: 'Tungul',
      department: 'Development',
      staffType: 'Probitionary',
      jobTitle: 'Associate Software Engineer',
      displayPhoto: '/uploads/defaults/teams/ezyva/profiles/iob/iobDP.jpg',
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
      site: 'remote',

    }
  },
  {
    email: 'dan.arceo@ezyva.com',
    password: 'kimpatakla',
    profile: {
      firstName: 'Daniel',
      lastName: 'Arceo',
      department: 'Accounts Support',
      staffType: 'Regular',
      jobTitle: 'Client Support Manager',
      displayPhoto: '/uploads/defaults/teams/ezyva/profiles/dan/danDp.jpg',
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
      site: 'remote',

    }
  },
  {
    email: 'aaron.randrup@ezyva.com',
    password: 'aaronmalatibutu',
    profile: {
      firstName: 'Aaron Jared',
      lastName: 'Randrup',
      department: 'Development',
      staffType: 'Probitionary',
      jobTitle: 'Senior Software Engineer',
      displayPhoto: '/uploads/defaults/teams/ezyva/profiles/aaron/jaredDp.jpg',
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
      site: 'remote',

    }
  },
  {
    email: 'jr@ezyva.com',
    password: 'password',
    profile: {
      firstName: 'Jr',
      lastName: 'Reyes',
      department: 'Development',
      staffType: 'Probitionary',
      jobTitle: 'Senior Software Engineer',
      displayPhoto: '/uploads/defaults/teams/ezyva/profiles/jr/rockAndRollToTheWorld.jpg',
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
      site: 'remote',

    }
  },
];
const loadStaff = ()=> {
  console.info('Adding Staff');
  _.each(newStaffs, function (staff) {
    Accounts.createUser({
      email: staff.email,
      password: staff.password,
      profile: staff.profile
    });
  });
};
const removeStaff = ()=> {
  console.info('Removing Staff');
  _.each(newStaffs, function (staff) {
    const removeUser = Accounts.findUserByEmail(staff.email);
    if (removeUser) {
      Meteor.users.remove(removeUser._id);
    }
  });
};