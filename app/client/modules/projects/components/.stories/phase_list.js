import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import PhaseList from '../phase_list.jsx';

storiesOf('projects.PhaseList', module)
  .add('default view', () => {
    return (
      <PhaseList />
    );
  })
