const newStaffs = [
  {
    email: 'kimberly.ocariz@ezyva.com',
    password: 'kRi7qzrt3!',
    profile: {
      firstName: 'Kimbery',
      lastName: 'Ocariz',
      department: 'Accounts',
      staffType: 'Probitionary',
      jobTitle: 'Account Support',
      displayPhoto: 'defaults/default-img.png',
      role:'staff',

    }
  },
  {
    email: 'iob.tungul@ezyva.com',
    password: 'secretwalangclue',
    profile: {
      firstName: 'Iob Lorenzo',
      lastName: 'Tungul',
      department: 'Development',
      staffType: 'Probitionary',
      jobTitle: 'Associate Software Engineer',
      displayPhoto: 'defaults/default-img.png',
      role:'staff',

    }
  },
  {
    email: 'dan.arceo@ezyva.com',
    password: 'kimpatakla',
    profile: {
      firstName: 'Daniel',
      lastName: 'Tungul',
      department: 'Development',
      staffType: 'Probitionary',
      jobTitle: 'Associate Software Engineer',
      displayPhoto: 'defaults/default-img.png',
      role:'staff',

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
      displayPhoto: 'defaults/default-img.png',
      role:'staff',

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
      displayPhoto: 'defaults/default-img.png',
      role:'staff',

    }
  },
];

export function loadStaff() {
  _.each(newStaffs, function (staff) {
    Accounts.createUser({
      email: staff.email,
      password: staff.password,
      profile: staff.profile
    });
  });
}
export function removeStaff() {
  _.each(newStaffs,function (staff) {
    const removeUser =  Meteor.users.findOne({'emails.address': {$regex:staff.email,$options:'i'}});
    if(removeUser){
      Meteor.users.remove(removeUser._id);
    }
  });
}