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

  isChecked(todo, event) {
    (todo.isDone) ? todo.isDone = false : todo.isDone = true;
    console.log(todo);
  }

  render() {
    const {taskId, todoList} =this.props;
    return (
      <div>
        TodoList
        <ul>
          {todoList.map((todo, index) =>
            <li key={index}>
              <p>
                <input type="checkbox" checked={todo.isDone} id={todo._id}
                       onClick={this.isChecked.bind(this,todo)}/>
                <label htmlFor={todo._id}>{todo.name}</label>
              </p>
            </li>)}
        </ul>
        Done
        {todoList.map((todo, index) =>
          <li key={index}>
            <p>
              <input type="checkbox" id={todo._id}/>
              <label htmlFor={todo._id}>{todo.name}</label>
            </p>
          </li>)}
      </div>
    );
  }
}

export default TodoList;
