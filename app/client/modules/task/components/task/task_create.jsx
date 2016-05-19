import React from 'react';
import Task from '/lib/collections/task';
import ReactQuickform from '/client/modules/reactUtils/components/react_quickform';

class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        TaskCreate
        <ReactQuickform
          buttonText="Add New Task"
          field={Task}
          operation="insert"
          name="insertTaskForm"
        />
        <a href="/task">View All task</a>
      </div>
    );
  }
}

export default TaskCreate;
