import React from 'react';
import Task from '/lib/collections/task';


class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <section className="task-list">
        <h5>TaskList</h5>
        <a href="task/new">New Task</a>
        <div className="row container-padding z-depth-1-half card-top-border">
          <div className="collection">
            {this.props.task.map(task => (
              <a href="#!" key={task._id} className="collection-item">
                <b>{task.title}</b>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

}

export default TaskList;
