import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffList from '../components/staff_list.jsx';

export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('team.members', teamId).ready()) {
    const options = {_id: {$ne: Meteor.userId()}};
    const staffList = Meteor.users.find(options).fetch();
    console.log(staffList);
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
)(StaffList);
