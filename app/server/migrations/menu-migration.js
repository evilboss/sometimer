import {Menu} from '/lib/collections';

export function loadMenus() {
  console.log('Loading Menus');
  if (Menu.find({}).count() === 0) {
    let menuItems = [{
      title: "In/Out Board",
      icon: "access_time",
      url: '/dashboard/timetracker',
      roles: ['Staff', 'Admin']
    },
      {
        title: "Timesheet",
        icon: "grid_on",
        url: '/dashboard/timesheet',
        roles: ['Staff', 'Admin']

      },
      {
        title: "Projects",
        icon: "assignment",
        url: '/projects/tileview',
        roles: ['Staff', 'Admin']

      }
    ];
    _.each(menuItems, function (menuItems) {
      Menu.insert(menuItems);
    });

  }
}
export function removeAllMenus() {
  console.log('Removing Menus');
  return Menu.remove({});

}
