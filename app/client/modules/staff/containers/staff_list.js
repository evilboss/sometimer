import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import React from 'react';
import StaffList from '../components/staff_list.jsx';
const Loading = () => React.createElement("div", null, "hmmm...");

export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('team.members', teamId).ready()) {
    const team = Collections.Team.findOne(teamId);
    const members = (team) ? (team.members) ? team.members : [] : [];
    const selector = {'profile.role': 'staff'};
    const options = {_id: {$ne: Meteor.userId()}, _id: {$in: members}};
    const staffList = Meteor.users.find(selector, options).fetch();
    onData(null, {staffList, team});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loading),
  useDeps(depsMapper)
)(StaffList);
