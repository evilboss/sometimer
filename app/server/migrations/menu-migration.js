import {Menu} from '/lib/collections';

export function loadMenus() {
  console.log('Loading Menus');
  if (Menu.find({}).count() === 0) {
    let menuItems = [{
      title: "Timesheet",
      icon: "access_time",
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
  _.each(Menu.find().fetch(), function (menu) {
    menu.delete();
  });
}
