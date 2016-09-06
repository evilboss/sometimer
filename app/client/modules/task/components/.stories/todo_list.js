import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TodoList from '../todos/todo_list.jsx';

storiesOf('task.TodoList', module)
  .add('default view', () => {
    return (
      <TodoList />
    );
  })
