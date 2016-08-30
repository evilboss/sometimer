import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import StaffSettings from '../staff_settings.jsx';

storiesOf('staff.StaffSettings', module)
  .add('default view', () => {
    return (
      <StaffSettings />
    );
  })
