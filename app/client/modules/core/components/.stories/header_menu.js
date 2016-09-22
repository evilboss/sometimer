import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import HeaderMenu from '../header_menu.jsx';

storiesOf('core.HeaderMenu', module)
  .add('default view', () => {
    return (
      <HeaderMenu />
    );
  })
