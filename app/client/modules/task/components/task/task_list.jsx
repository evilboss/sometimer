import React from 'react';
import StartTaskButton from '/client/modules/users/containers/start_task_button';
import AssignDropDown from '/client/modules/users/containers/assign_drop_down';

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
      <section className="task-list">
        <h5>TaskList<span className="icon-span"></span>
          {tasks.map((task, index) => (
            <div className="row">
              <a href="" key={index}>
                <b>{task.title}</b>
                <StartTaskButton userId={Meteor.userId()}/>
                <AssignDropDown userId={Meteor.userId()}/>

              </a>

            </div>
          ))}

        </h5>

      </section>
    );
  }

  render() {
    let tasks = this.props.tasks;
    return (
      <div>
        {tasks.length === 0 ? <p>No Task Yet!</p> : this.renderTasks()}
      </div>);
  }
}

export default TaskList;
