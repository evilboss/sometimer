import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  render() {
    const {taskId, todoList} =this.props;
    return (
      <div>
        TodoList
        <ul>
          {todoList.map((todo, index) =><li key={index}>

            <p>
              <input type="checkbox" id={todo._id}/>
              <label htmlFor={todo._id}>{todo.name}</label>
            </p>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default TodoList;
