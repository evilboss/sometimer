import React from "react";

class TodoCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {taskId, error} =this.props;
    return (
      <div>
        TodoCreate
        {error ? this._renderError(error) : null}
        <div>
          <form className="new-task" onSubmit={this._create.bind(this)}>
            <input
              type="text"
              ref="name"
              placeholder="Task Name"
            />
            <input
              type="text"
              ref="description"
              placeholder="Description"
            />
            <button className="btn btn-default" type="submit">Add Todo</button>
          </form>
        </div>
      </div>
    );
  }

  _create(event) {
    event.preventDefault();
    const {taskId, create} =this.props;
    const todoItem = {
      taskId: taskId,
      name: this.refs.name.value,
      description: this.refs.description.value
    };
    create(todoItem);
    this.refs.name.value = '';
    this.refs.description.value = '';
  }

  _renderError(error) {
    return (
      <div className='error'>
        {error}
      </div>
    );
  }
}

export default TodoCreate;
