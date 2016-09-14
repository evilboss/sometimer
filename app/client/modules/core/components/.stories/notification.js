import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Notification from '../notification.jsx';

storiesOf('core.Notification', module)
  .add('default view', () => {
    return (
      <Notification />
    );
  })
