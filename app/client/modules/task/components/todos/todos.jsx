import React from 'react';
import {TodoCreate, TodoList} from '../../containers/todos/';

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {taskId} =this.props;
    return (
      <div>
        Todos
        <TodoCreate taskId={taskId}/>
        <TodoList taskId={taskId}/>
      </div>
    );
  }
}

export default Todos;
