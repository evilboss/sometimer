import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Daterange from '../daterange.jsx';

storiesOf('timesheet.Daterange', module)
  .add('default view', () => {
    return (
      <Daterange />
    );
  })
