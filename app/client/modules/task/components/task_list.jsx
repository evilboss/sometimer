import React from 'react';
import Task from '/lib/collections/task';
import ReactQuickform from '/client/modules/react_quickform/components/react_quickform';


class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        TaskList
        <ReactQuickform
          buttonText="pekpek"
          field={Task}
          operation="insert"
          name="insertTaskForm"
          buttonClass="yellow"
          included="title,author"
          ommited ="author"
        />
      </div>
    );
  }

}

export default TaskList;
