import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Username from '../username.jsx';

storiesOf('users.Username', module)
  .add('default view', () => {
    return (
      <Username />
    );
  })
