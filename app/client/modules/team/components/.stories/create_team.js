import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import CreateTeam from '../manage_team/create_team.jsx';

storiesOf('team.CreateTeam', module)
  .add('default view', () => {
    return (
      <CreateTeam />
    );
  })
