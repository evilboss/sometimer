import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Invite from '../invite.jsx';

storiesOf('invitations.Invite', module)
  .add('default view', () => {
    return (
      <Invite />
    );
  })
