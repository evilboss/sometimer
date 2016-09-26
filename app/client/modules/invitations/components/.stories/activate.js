import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Activate from '../activate.jsx';

storiesOf('invitations.Activate', module)
  .add('default view', () => {
    return (
      <Activate />
    );
  })
