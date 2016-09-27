import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import InviteList from '../components/invite_list.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const subscriptionReady = [Meteor.subscribe('invitationsByUser').ready()];
  const dataReady = ()=> {
    const pendingInvites = Collections.Invitations.find({activationStatus: 'pending'}).fetch();
    const closedInvites = Collections.Invitations.find({activationStatus: 'active'}).fetch();

    onData(null, {pendingInvites, closedInvites});
  }
  (subscriptionReady) ? dataReady() : onData();
};
export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(InviteList);
