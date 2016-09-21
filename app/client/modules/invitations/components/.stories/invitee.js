import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Invitee from '../invitee.jsx';

storiesOf('invitations.Invitee', module)
  .add('default view', () => {
    return (
      <Invitee />
    );
  })
