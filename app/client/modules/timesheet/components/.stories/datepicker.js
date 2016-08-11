import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Datepicker from '../datepicker.jsx';

storiesOf('timesheet.Datepicker', module)
  .add('default view', () => {
    return (
      <Datepicker />
    );
  })
