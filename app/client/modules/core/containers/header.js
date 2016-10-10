import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Header from '../components/header.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('menu').ready(), Meteor.subscribe('user.current').ready()];
  const dataReady = ()=> {
    const currentUser = Meteor.user();
    const userRole = (currentUser) ? (currentUser.profile) ? (currentUser.profile.role) ? currentUser.profile.role : '' : '' : '';
    options = {roles: {$elemMatch: {$in: [userRole]}}};
    const menu = Collections.Menu.find(options).fetch();
    onData(null, {menu, currentUser});
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
