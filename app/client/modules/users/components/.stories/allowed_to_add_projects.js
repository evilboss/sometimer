import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AllowedToAddProjects from '../allowed_to_add_projects.jsx';

storiesOf('users.AllowedToAddProjects', module)
  .add('default view', () => {
    return (
      <AllowedToAddProjects />
    );
  })
