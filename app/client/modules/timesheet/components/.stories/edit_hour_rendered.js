import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import EditHourRendered from '../edit_hour_rendered.jsx';

storiesOf('timesheet.EditHourRendered', module)
  .add('default view', () => {
    return (
      <EditHourRendered />
    );
  })
