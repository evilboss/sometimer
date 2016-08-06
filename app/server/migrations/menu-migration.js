import {Menu} from '/lib/collections';
const menuItems = [{
  title: "In/Out Board",
  icon: "access_time",
  url: '/dashboard/inOutBoard',
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
export function loadMenus() {
  console.log('Loading Menus');
  if (Menu.find({}).count() === 0) {
    _.each(menuItems, function (menuItems) {
      Menu.insert(menuItems);
    });

  }
}
export function removeAllMenus() {
  console.log('Removing Menus');
  _.each(menuItems, function (menuItems) {
    const removeMenu = Menu.findOne({title:menuItems.title});
    if(removeMenu){
      Menu.remove(removeMenu._id);
    }
  });
    
    Menu.remove({});

}
