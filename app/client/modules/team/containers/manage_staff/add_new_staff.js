import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AddNewStaff from '../../components/manage_staff/add_new_staff.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subsriptionReady = [Meteor.subscribe('user.current').ready()];
  const dataReady = ()=> {
    let userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    let userRole = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.role) ? Meteor.user().profile.role : '' : '' : '';
    console.log(userRole);
    onData(null, {userPermissions, userRole});
  };
  (subsriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  create: actions.staff.create,
  clearErrors: actions.staff.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddNewStaff);
