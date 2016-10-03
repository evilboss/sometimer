/**
 * Created by jr on 6/2/16.
 */
const clients = ()=> {

  const currentUser = Meteor.users.findOne({_id: Meteor.userId()});
  console.log(currentUser);

};
const staff = ()=> {
};
const managers = ()=> {
};
const canview = {
  clients: clients,
  staff: staff,
  managers: managers
};
const control = {
  canview: canview,
};

export {
  control
}