import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectQuickView from '../project_quick_view.jsx';

storiesOf('projects.ProjectQuickView', module)
  .add('default view', () => {
    return (
      <ProjectQuickView />
    );
  })
