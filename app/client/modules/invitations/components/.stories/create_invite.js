import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import CreateInvite from '../create_invite.jsx';

storiesOf('invitations.CreateInvite', module)
  .add('default view', () => {
    return (
      <CreateInvite />
    );
  })
