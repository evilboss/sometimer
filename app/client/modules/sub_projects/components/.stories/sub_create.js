import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import SubCreate from '../sub_create.jsx';

storiesOf('sub_projects.SubCreate', module)
  .add('default view', () => {
    return (
      <SubCreate />
    );
  })
