import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffMultiSelect from '../components/staff_multi_select.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('teamlist').ready()) {
    const teamlist = Collections.Teamlist.find().fetch();
    const options = {_id: {$ne: Meteor.userId()}};
    const staffList = Meteor.users.find(options).fetch();
    onData(null, {staffList});
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
)(StaffMultiSelect);
