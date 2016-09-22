import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TeamQuickView from '../team_quick_view.jsx';

storiesOf('team.TeamQuickView', module)
  .add('default view', () => {
    return (
      <TeamQuickView />
    );
  })
