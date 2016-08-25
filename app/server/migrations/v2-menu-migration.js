import {Menu} from '/lib/collections';
Migrations.add({
  version: 2,
  name: 'Add Menu list to app',
  up: function () {
    loadMenus();
  },
  down: function () {
    removeAllMenus();
  }
});
const menuItems = [{
  title: "Time Tracker",
  icon: "access_time",
  url: '/dashboard/timetracker',
  name: 'users.timetracker',
  roles: ['staff', 'admin', 'manager']
},
  {
    title: "Timesheet",
    icon: "grid_on",
    url: '/dashboard/timesheet',
    name: 'timesheet',
    roles: ['staff', 'admin', 'manager']

  },
  {
    title: "Staff List",
    icon: "group",
    url: '/dashboard/stafflist',
    name: 'dashboard.stafflist',
    roles: ['admin', 'manager']

  },
  {
    title: "Projects",
    icon: "assignment",
    url: '/projects/tileview',
    name:'projects.tileview',
    roles: ['staff', 'admin', 'manager']

  }
];
const loadMenus = ()=> {
  console.info('Loading Menus');
  if (Menu.find({}).count() === 0) {
    _.each(menuItems, function (menuItems) {
      Menu.insert(menuItems);
    });

  }
};
const removeAllMenus = ()=> {
  console.info('Removing Menus');
  _.each(menuItems, function (menuItems) {
    const removeMenu = Menu.findOne({title: menuItems.title});
    if (removeMenu) {
      Menu.remove(removeMenu._id);
    }
  });

  Menu.remove({});
};
