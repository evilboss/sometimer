import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import React from 'react';
import Loader from '/client/utils/loader/loader';
import StaffList from '../components/staff_list.jsx';


export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('team.members', teamId).ready(), Meteor.subscribe('user.current').ready()]
  const dataReady = () => {
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    const team = Collections.Team.findOne(teamId);
    const members = (team) ? (team.members) ? team.members : [] : [];
    const selector = {'profile.role': 'staff'};
    const options = {_id: {$ne: Meteor.userId()}, _id: {$in: members}};
    const teamLeaderSelector = (team) ? (team.teamLeader) ? {_id: team.teamLeader} : {_id: 'wontwork'} : {_id: 'wontwork'};
    const teamLeader = Meteor.users.findOne(teamLeaderSelector);
    const staffList = Meteor.users.find(selector, options).fetch();
    onData(null, {staffList, team, teamLeader, userPermissions});
  }
  (subscriptionReady) ? dataReady() : onData();

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(StaffList);
