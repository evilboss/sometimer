import React from 'react';
import Task from '/lib/collections/task';
import ReactAutoForm from 'meteor-react-autoform';
import  {QuickForm} from 'react-form-simple-schema';
import {Form} from 'simple-react-form';
import {RaisedButton} from 'material-ui';


class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        TaskList
        <ReactAutoForm collection={Task} type="insert" onSubmit={console.log('submit')} formClass="col s12" />

      </div>
    );
  }

}

export default TaskList;
