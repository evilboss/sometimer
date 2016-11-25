import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import React from 'react';
import Loader from '/client/utils/loader/loader';
import StaffList from '../components/staff_list.jsx';


export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('team.members', teamId).ready()) {
    const team = Collections.Team.findOne(teamId);
    const members = (team) ? (team.members) ? team.members : [] : [];
    const selector = {'profile.role': 'staff'};
    const options = {_id: {$ne: Meteor.userId()}, _id: {$in: members}};
    const teamLeaderSelector = (team) ? (team.teamLeader) ? {_id: team.teamLeader} : {_id: 'wontwork'} : {_id: 'wontwork'};
    const teamLeader = Meteor.users.findOne(teamLeaderSelector);
    const staffList = Meteor.users.find(selector, options).fetch();
    onData(null, {staffList, team, teamLeader});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(StaffList);
