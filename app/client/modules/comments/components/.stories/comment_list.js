import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import CommentList from '../comment_list.jsx';

storiesOf('comments.CommentList', module)
  .add('default view', () => {
    return (
      <CommentList />
    );
  })
