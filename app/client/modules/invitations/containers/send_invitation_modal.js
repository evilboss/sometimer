import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import SendInvitationModal from '../components/send_invitation_modal.jsx';
export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_INVITE_ERROR');
  onData(null, {error});
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
