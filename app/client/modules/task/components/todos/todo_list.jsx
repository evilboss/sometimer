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
            <input
              type="checkbox"
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            {todo.name}
          </li>)}
        </ul>
      </div>
    );
  }
}

export default TodoList;
