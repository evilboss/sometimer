import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TimeRequest from '../time_request.jsx';

storiesOf('timesheet.TimeRequest', module)
  .add('default view', () => {
    return (
      <TimeRequest />
    );
  })
