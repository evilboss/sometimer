import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AddNewStaff from '../../components/manage_staff/add_new_staff.jsx';

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
)(AddNewStaff);
