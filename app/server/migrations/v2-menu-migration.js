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
    roles: ['super-admin', 'staff', 'admin', 'manager', 'client'],
    routes: ['']
  },
  {
    title: "MY TEAM",
    icon: "group",
    url: '/dashboard/team',
    name: 'dashboard.team',
    roles: ['super-admin', 'admin', 'manager', 'staff', 'client'],
    routes: ['dashboard.team', 'dashboard.user.new', 'dashboard.team.new', 'dashboard.manageStaff', 'dashboard.manageClients', 'dashboard.manageAdmins', 'dashboard.manageManagers', 'dashboard.myteam', 'dashboard.team.edit', 'staff.settings', 'dashboard.staff'],


  },
  {
    title: "TIMESHEET",
    icon: "grid_on",
    url: '/dashboard/timesheet',
    name: 'timesheet',
    roles: ['super-admin', 'staff', 'admin', 'manager'],
    routes: ['timesheet'],
  },
  {
    title: "WORK FLOW",
    icon: "group",
    url: '',
    name: 'dashboard.workflow',
    roles: ['super-admin', 'staff', 'admin', 'manager', 'client'],
    permission: 'readWorkflow',
    routes: ['']
  },
  {
    title: "PROJECTS",
    icon: "assignment",
    url: '/projects/tileview',
    name: 'projects.tileview',
    roles: ['super-admin', 'staff', 'admin', 'manager', 'client'],
    permission: 'readProject',
    routes: ['projects.tileview', 'projects.listview', 'project.single', 'projects.new']
  },
  {
    title: "TOOLBOX",
    icon: "group",
    url: '',
    name: 'dashboard.toolbox',
    roles: ['super-admin', 'staff', 'admin', 'manager', 'client'],
    routes: ['']

  },
  {
    title: "MY ACCOUNT",
    icon: "grid_on",
    url: '/dashboard/profile',
    name: 'timesheet',
    roles: ['super-admin', 'staff', 'admin', 'manager'],
    routes: ['users.profile', 'users.profile.edit']

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
