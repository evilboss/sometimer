import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ComingSoon from '../../../../utils/helpers/sweet-helper.js';

storiesOf('core.ComingSoon', module)
  .add('default view', () => {
    return (
      <ComingSoon />
    );
  })
