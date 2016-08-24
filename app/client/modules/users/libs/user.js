/**
 * Created by jr on 6/28/16.
 */
let getCurrentUser =()=>{
  if (Meteor.subscribe("user.current").ready) {
    return Meteor.user();
  }
};
let findCurrentUser=()=>{
  Tracker.autorun(function () {
    getCurrentUser();
    //(getCurrentUser()) ? FlowRouter.redirect('/login') : FlowRouter.redirect('/notfound');
  });
}
const UserInfo = {
  getCurrent:()=>getCurrentUser(),
};
export {UserInfo};