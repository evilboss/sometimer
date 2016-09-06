import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Todos from '../todos/todos.jsx';

storiesOf('task.Todos', module)
  .add('default view', () => {
    return (
      <Todos />
    );
  })
