import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import SubProjectList from '../sub_project_list.jsx';

storiesOf('sub_projects.SubProjectList', module)
  .add('default view', () => {
    return (
      <SubProjectList />
    );
  })
