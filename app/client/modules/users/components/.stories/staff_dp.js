import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import StaffDp from '../staff_dp.jsx';

storiesOf('users.StaffDp', module)
  .add('default view', () => {
    return (
      <StaffDp />
    );
  })
