import React from 'react';
import Task from '/lib/collections/task';


class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <div className="row">
        TaskList
        <a href="task/new">New Task</a>
        {this.props.task.map(task => (
          <div key={task._id} className="comment">
            <b>{task.title}: {task.author}</b> <span>Assignee: {task.assignee}</span>
          </div>
        ))}
      </div>
    );
  }

}

export default TaskList;
