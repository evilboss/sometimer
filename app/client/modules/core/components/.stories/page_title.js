import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import PageTitle from '../page_title.jsx';

storiesOf('core.PageTitle', module)
  .add('default view', () => {
    return (
      <PageTitle />
    );
  })
