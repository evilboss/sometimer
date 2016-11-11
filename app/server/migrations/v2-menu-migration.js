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
    title: "DASHBOARD",
    icon: "grid_on",
    url: '/dashboard',
    name: 'dashboard',
    roles: ['super-admin', 'staff', 'admin', 'manager']
  },
  {
    title: "TIMESHEET",
    icon: "grid_on",
    url: '/dashboard/timesheet',
    name: 'timesheet',
    roles: ['super-admin', 'staff', 'admin', 'manager']
  },
  {
    title: "WORK FLOW PLANNING",
    icon: "group",
    url: '',
    name: 'dashboard.workflow',
    roles: ['super-admin', 'staff', 'admin', 'manager', 'client'],
    permission: 'readWorkflow',
  },
  {
    title: "PROJECT MANAGEMENT",
    icon: "assignment",
    url: '/projects/tileview',
    name: 'projects.tileview',
    roles: ['super-admin', 'staff', 'admin', 'manager', 'client'],
    permission: 'readProject'
  },
  {
    title: "TOOLBOX",
    icon: "group",
    url: '',
    name: 'dashboard.toolbox',
    roles: ['super-admin', 'staff', 'admin', 'manager', 'client']

  },
  {
    title: "MY ACCOUNT",
    icon: "grid_on",
    url: '/dashboard/profile',
    name: 'timesheet',
    roles: ['super-admin', 'staff', 'admin', 'manager']
  },
  {
    title: "MY TEAM",
    icon: "group",
    url: '/dashboard/team',
    name: 'dashboard.team',
    roles: ['super-admin', 'admin', 'manager', 'client']

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
