import {Menu} from '/lib/collections';

export function loadMenus() {
  console.log('Loading Menus');
  if (Menu.find({}).count() === 0) {
    let menuItems = [{
      title: "Timesheet",
      icon: "access_time"
    },
      {
        title: "Task",
        icon: "assignment"
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
