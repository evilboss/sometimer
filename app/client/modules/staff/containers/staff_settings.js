import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffSettings from '../components/staff_settings.jsx';
export const composer = ({context, staffId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('user.current').ready(), Meteor.subscribe('user.name.by.id', staffId).ready()];
  const dataReady = ()=> {
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    const user = Meteor.users.findOne(staffId);
    onData(null, {staffId, userPermissions, user});
  };
  (subscriptionReady) ? dataReady() : onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffSettings);
