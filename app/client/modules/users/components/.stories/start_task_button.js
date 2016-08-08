import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import StartTaskButton from '../start_task_button.jsx';

storiesOf('users.StartTaskButton', module)
  .add('default view', () => {
    return (
      <StartTaskButton />
    );
  })
