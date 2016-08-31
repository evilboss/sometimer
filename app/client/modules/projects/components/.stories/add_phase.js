import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AddPhase from '../add_phase.jsx';

storiesOf('projects.AddPhase', module)
  .add('default view', () => {
    return (
      <AddPhase />
    );
  })
