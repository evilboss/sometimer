import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import StaffMultiSelect from '../staff_multi_select.jsx';

storiesOf('staff.StaffMultiSelect', module)
  .add('default view', () => {
    return (
      <StaffMultiSelect />
    );
  })
