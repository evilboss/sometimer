import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffProfileForm from '../components/staff_profile_form.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  userUpdate: actions.staff.updateStaff,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffProfileForm);
