import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import DashboardHeader from '../dashboard_header.jsx';

storiesOf('dashboard.DashboardHeader', module)
  .add('default view', () => {
    return (
      <DashboardHeader />
    );
  })
