import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AssignDropDown from '../assign_drop_down.jsx';

storiesOf('users.AssignDropDown', module)
  .add('default view', () => {
    return (
      <AssignDropDown />
    );
  })
