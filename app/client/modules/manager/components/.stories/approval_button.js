import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ApprovalButton from '../approval_button.jsx';

storiesOf('manager.ApprovalButton', module)
  .add('default view', () => {
    return (
      <ApprovalButton />
    );
  })
