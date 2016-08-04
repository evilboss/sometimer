import React from 'react';
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
    return (
      <section className="task-list">
        <h5>TaskList<span className="icon-span">
       <a href="task/new"
          className="btn-floating waves-effect waves-light theme-color">
            <i className="material-icons">add</i></a></span></h5>
        <div className="row container-padding z-depth-1-half card-top-border">
          <div className="col l9 m8 s12">
            {tasks.map((task, index) => (
              <a href="#!" key={index}>
                <b>{task.title}</b>
              </a>
            ))}
          </div>
          <div className="col l3 m4 s12 z-depth-1">
            <div className="input-field">
              <select className="icons">
                <option value="" disabled selected>to-dos assigned to</option>
                <option value="" data-icon="images/sample-1.jpg" className="circle">AaronR</option>
              </select>
              <label>Show to-dos assigned to </label>
            </div>
            <div className="input-field">
              <select className="icons">
                <option value="" disabled selected>to-dos that are due</option>
                <option value="">yesterday</option>
              </select>
              <label>Show to-dos that are due </label>
            </div>
          </div>

        </div>
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
