import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ListView from '../list_view.jsx';

storiesOf('projects.ListView', module)
  .add('default view', () => {
    return (
      <ListView />
    );
  })
