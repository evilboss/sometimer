import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Header from '../components/header.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('menu').ready(), Meteor.subscribe('user.current').ready(), Meteor.subscribe('settings').ready()];
  const dataReady = ()=> {
    const currentUser = Meteor.user();
    let role = (currentUser) ? (currentUser.profile) ? (currentUser.profile.role) ? currentUser.profile.role : '' : '' : '';
    let userPermissions = (currentUser) ? (currentUser.profile) ? (currentUser.profile.permissions) ? currentUser.profile.permissions : '' : '' : '';

    console.log(currentUser);
    options = {};
    const menu = Collections.Menu.find().fetch();
    let settings = Collections.Settings.findOne();
    let sitePhoto = (settings) ? (settings.url) ? settings.url : '' : '';
    onData(null, {menu, currentUser, sitePhoto, role, userPermissions});
  };
  (subscriptionReady) ? dataReady() : onData();
};
export const depsMapper = (context, actions) => ({
  context: () => context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Header);
