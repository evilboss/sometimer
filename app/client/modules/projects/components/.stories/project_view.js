import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectView from '../project_view.jsx';

storiesOf('projects.ProjectView', module)
  .add('default view', () => {
    return (
      <ProjectView />
    );
  })
