import React from 'react';
import StartTaskButton from '/client/modules/users/containers/start_task_button';
import AssignDropDown from '/client/modules/users/containers/assign_drop_down';
import Todos from '../../containers/todos/todos';
class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('select').material_select();
    });
  };

  renderTasks() {
    let tasks = this.props.tasks;
    return (
      <section className="task-list white-wrapper no-horizontal-margin">
        <h4>TaskList</h4>
        {tasks.map((task, index) => (
          <div className="row z-depth-1 task-item">
            <a href="" key={index}>
              <h5>{task.title}</h5>
              <StartTaskButton userId={Meteor.userId()}/>
              <AssignDropDown userId={Meteor.userId()}/>
            </a>
            <ul>
              <Todos taskId={task._id}/>
            </ul>

          </div>
        ))}

      </section>
    );
  }

  renderNoTask() {
    return (
      <div>
        <h4>TaskList</h4>
        <p>No Task Yet!</p>
      </div>
    )
  }

  render() {
    let tasks = this.props.tasks;
    return (
      <section className="task-list white-wrapper no-horizontal-margin">
        {tasks.length === 0 ? this.renderNoTask() : this.renderTasks()}
      </section>);
  }
}

export default TaskList;
