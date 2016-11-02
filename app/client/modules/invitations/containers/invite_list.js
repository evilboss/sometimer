import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import InviteList from '../components/invite_list.jsx';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const subscriptionReady = [Meteor.subscribe('invitationsByUser').ready, Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready];
  const dataReady = ()=> {
    const pendingInvites = Collections.Invitations.find({activationStatus: 'pending'}).fetch();
    const closedInvites = Collections.Invitations.find({activationStatus: 'active'}).fetch();
    const team = Collections.Team.find().fetch();
    onData(null, {team, pendingInvites, closedInvites});
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
