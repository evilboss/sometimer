import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import StaffList from '../../../staff/components/staff_list.jsx';

storiesOf('client.StaffList', module)
  .add('default view', () => {
    return (
      <StaffList />
    );
  })
