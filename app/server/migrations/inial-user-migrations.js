/**
 * Created by jr on 6/30/16.
 */
export function loadStaff() {
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
        displayPhoto: '/Assets/teams/ezyva/profiles/kim/kimDP.jpg',

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
        displayPhoto: '/Assets/teams/ezyva/profiles/iob/iobDP.jpg',

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
        displayPhoto: '/Assets/teams/ezyva/profiles/dan/danDp.jpg',

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
        displayPhoto: '/Assets/teams/ezyva/profiles/aaron/jaredDp.jpg',

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
        displayPhoto: '/Assets/teams/ezyva/profiles/jr/rockAndRollToTheWorld.jpg',

      }
    },
  ];
  _.each(newStaffs, function (staff) {
    Accounts.createUser({
      email: staff.email,
      password: staff.password,
      profile: staff.profile
    });
  });
}
