import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TileView from '../tile_view.jsx';

storiesOf('projects.TileView', module)
  .add('default view', () => {
    return (
      <TileView />
    );
  })
