import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import moment from 'moment';

import StaffDetails from '../components/staff_details.jsx';

export const composer = ({context, staffId, index, startDate, endDate}, onData) => {
  const {Meteor, Collections} = context();
  const subsriptionReady = [Meteor.subscribe('user.current').ready(), Meteor.subscribe('user.name.by.id', staffId).ready()];
  const dataReady = ()=> {
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    let staff = Meteor.users.findOne(staffId);
    onData(null, {userPermissions, staff, index});
  };
  (subsriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffDetails);
