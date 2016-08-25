import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TimesheetTable from '../timesheet_table.jsx';

storiesOf('timesheet.TimesheetTable', module)
  .add('default view', () => {
    return (
      <TimesheetTable />
    );
  })
