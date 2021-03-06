import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Dashboard from '../components/dashboard.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('menu').ready()) {
    //const userRole = Meteor.users.findOne({_id: Meteor.userId()}).profile.role;
    //options = {roles: {$elemMatch: {$in: [userRole]}}};
    const menu = Collections.Menu.find().fetch();
    onData(null, {menu});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Dashboard);
