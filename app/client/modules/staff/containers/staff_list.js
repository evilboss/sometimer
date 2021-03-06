import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import React from 'react';
import Loader from '/client/utils/loader/loader';
import StaffList from '../components/staff_list.jsx';

/*Todo: Need to cleanup subscriptions from getting staffs, Already handled in staff details*/
export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('team.members', teamId).ready(), Meteor.subscribe('user.current').ready()]
  const dataReady = () => {
    const currentUser = Meteor.userId();
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    const team = Collections.Team.findOne(teamId);
    onData(null, {team, currentUser, userPermissions});
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
