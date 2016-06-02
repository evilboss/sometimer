import React from 'react';
class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <section className="task-list">
        <h5>TaskList <span><a href="task/new" className="btn-floating waves-effect waves-light cyan"> <i
          className="material-icons">add</i></a></span></h5>

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
    )
      ;
  }

}

export default TaskList;
