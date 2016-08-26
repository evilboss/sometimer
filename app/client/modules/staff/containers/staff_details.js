import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffDetails from '../components/staff_details.jsx';

export const composer = ({context, staff, index}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {staff, index});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffDetails);
