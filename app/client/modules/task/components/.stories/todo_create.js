import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TodoCreate from '../todos/todo_create.jsx';

storiesOf('task.TodoCreate', module)
  .add('default view', () => {
    return (
      <TodoCreate />
    );
  })
