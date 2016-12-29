import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import React from 'react';
import Loader from '/client/utils/loader/loader';
import StaffList from '../components/staff_list.jsx';


export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('team.members', teamId).ready(), Meteor.subscribe('user.current').ready()]
  const dataReady = () => {
    const currentUser = Meteor.userId();
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    const team = Collections.Team.findOne(teamId);
    const members = (team) ? (team.members) ? team.members : ['nomembers'] : ['nomembers'];
    const teamLeaders = (team) ? (team.teamLeader) ? team.teamLeader : ['noleaders'] : ['noleaders'];
    const selector = {'profile.role': 'staff'};
    const options = {_id: {$ne: Meteor.userId()}, _id: {$in: members}};
    const teamLeaderSelector = {_id: {$in: teamLeaders}};
    const teamLeader = Meteor.users.find(teamLeaderSelector).fetch();
    const staffList = Meteor.users.find(selector, options).fetch();
    onData(null, {staffList, team, teamLeader, currentUser, userPermissions});
  };
  (subscriptionReady) ? dataReady() : onData();

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(StaffList);
