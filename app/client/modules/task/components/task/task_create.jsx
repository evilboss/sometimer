import React from 'react';
import Quickform from '/client/modules/reactUtils/components/quickform';
class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="task-create">
        <h5 className="inline">TaskCreate</h5> <a className="waves-effect waves-light btn cyan">
        <i className="material-icons right">assignment</i>
        View All task</a>
        <div className="row container-padding z-depth-1-half card-top-border">
          {<Quickform
            buttonText="Add New Task"
            field={this.props.task}
            operation="insert"
            name="insertTaskForm"
          />}
        </div>
      </section>
    );
  }
}

export default TaskCreate;
