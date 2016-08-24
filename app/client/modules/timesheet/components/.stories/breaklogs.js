import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Breaklogs from '../breaklogs.jsx';

storiesOf('timesheet.Breaklogs', module)
  .add('default view', () => {
    return (
      <Breaklogs />
    );
  })
