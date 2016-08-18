import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import InviteList from '../invite_list.jsx';

storiesOf('invitations.InviteList', module)
  .add('default view', () => {
    return (
      <InviteList />
    );
  })
