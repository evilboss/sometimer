import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TeamList from '../team_list.jsx';

storiesOf('team.TeamList', module)
  .add('default view', () => {
    return (
      <TeamList />
    );
  })
