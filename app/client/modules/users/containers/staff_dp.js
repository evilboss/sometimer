import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffDp from '../components/staff_dp.jsx';

export const composer = ({context, userId, projectId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('collaborators', projectId).ready()) {
    const teamlist = Collections.Teamlist.find().fetch();
    const options = {_id: userId};
    const staff = Meteor.users.findOne(options);
    const displayPhoto = staff.profile.displayPhoto
    onData(null, {displayPhoto});
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
)(StaffDp);
