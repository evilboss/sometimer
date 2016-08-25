import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TimeTotal from '../time_total.jsx';

storiesOf('client_module.TimeTotal', module)
  .add('default view', () => {
    return (
      <TimeTotal />
    );
  })
