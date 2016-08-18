import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import SendInvitationModal from '../send_invitation_modal.jsx';

storiesOf('invitations.SendInvitationModal', module)
  .add('default view', () => {
    return (
      <SendInvitationModal />
    );
  })
