import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffDetails from '../../components/manage_staff/staff_details.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffDetails);
