import React from 'react';
class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? this._renderError(error) : null}
        <textarea ref='text' placeholder='Enter task title here.'>
        </textarea>
        <select ref="publishstatus" defaultValue="">
          <option>Draft</option>
          <option>Published</option>
        </select>
        <select ref="assignee" defaultValue="Draft">
          <option>Draft</option>
          <option>Published</option>
        </select>
        <br />
        <button className="btn-floating waves-effect waves-light theme-color" onClick={this._create.bind(this)}> <i className="material-icons">add</i></button>
      </div>
    );
  }

  _create() {
    const title = this.refs.text.value;
    const {create, projectId} = this.props;
    create(projectId, title);
    this.refs.text.value = '';
  }

  _renderError(error) {
    return (
      <div className='error'>
        {error}
      </div>
    );
  }
}


export default TaskCreate;
