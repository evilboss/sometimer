import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import UserDetails from '../user_details.jsx';

storiesOf('timesheet.UserDetails', module)
  .add('default view', () => {
    return (
      <UserDetails />
    );
  })
