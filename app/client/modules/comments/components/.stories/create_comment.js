import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import CreateComment from '../create_comment.jsx';

storiesOf('comments.CreateComment', module)
  .add('default view', () => {
    return (
      <CreateComment />
    );
  })
