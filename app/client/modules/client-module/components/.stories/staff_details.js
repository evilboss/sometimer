import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import StaffDetails from '../staff_details.jsx';

storiesOf('client_module.StaffDetails', module)
  .add('default view', () => {
    return (
      <StaffDetails />
    );
  })
