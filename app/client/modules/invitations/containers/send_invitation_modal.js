import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import SendInvitationModal from '../components/send_invitation_modal.jsx';
export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  if (Meteor.subscribe('team.list').ready()) {
    const error = LocalState.get('CREATE_INVITE_ERROR');
    const team = Collections.Team.find().fetch();
    const currentUser = Meteor.user();
    onData(null, {team, currentUser});
  } else {
    onData();
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  make: actions.invites.make,
  clearErrors: actions.invites.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SendInvitationModal);
