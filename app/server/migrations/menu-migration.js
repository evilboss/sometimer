import {Menu} from '/lib/collections';

export function loadMenus() {
  console.log('Loading Menus');
  if (Menu.find({}).count() === 0) {
    let menuItems = [{
      title: "In/Out Board",
      icon: "access_time",
      url: '/inOutBoard'
    },
      {
        title: "Timesheet",
        icon: "grid_on",
        url: '/timesheet'
      },
      {
        title: "Task",
        icon: "assignment",
        url: '/task'
      }];
    _.each(menuItems, function (menuItems) {
      Menu.insert(menuItems);
    });

  }
}
export function removeAllMenus() {
  console.log('Removing Menus');
  return Menu.remove({});

}
