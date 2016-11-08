import {Menu} from "/lib/collections";
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
const menuItems = [
  {
    title: "TIME TRACKER",
    icon: "access_time",
    url: '/dashboard/timetracker',
    name: 'users.timetracker',
    roles: ['staff', 'admin', 'manager']
  },
  {
    title: "TIMESHEET",
    icon: "grid_on",
    url: '/dashboard/timesheet',
    name: 'timesheet',
    roles: ['staff', 'admin', 'manager']
  },
  {
    title: "WORK FLOW",
    icon: "group",
    url: '',
    name: 'dashboard.workflow',
    roles: ['staff', 'admin', 'manager', 'client'],
    permission: 'readWorkflow',
  },
  {
    title: "PROJECTS",
    icon: "assignment",
    url: '/projects/tileview',
    name: 'projects.tileview',
    roles: ['staff', 'admin', 'manager', 'client'],
    permission:'readProject'
  },
  {
    title: "TOOLBOX",
    icon: "group",
    url: '',
    name: 'dashboard.toolbox',
    roles: ['staff', 'admin', 'manager', 'client']

  },
  {
    title: "MY TEAM",
    icon: "group",
    url: '/dashboard/team',
    name: 'dashboard.team',
    roles: ['admin', 'manager', 'client']

  },
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
