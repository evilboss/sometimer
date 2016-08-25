import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TimesheetTotal from '../timesheet_total.jsx';

storiesOf('timesheet.TimesheetTotal', module)
  .add('default view', () => {
    return (
      <TimesheetTotal />
    );
  })
