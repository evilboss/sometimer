import React from 'react';
class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {error} = this.props;
    return (
      <section id="task-create" className="white-wrapper">
        <h4>Create A Task</h4>
        {error ? this._renderError(error) : null}
        <div className="row no-margin">
          <div className="input-field col s12">
          <textarea ref='text' className="materialize-textarea">
        </textarea>
            <label htmlFor="textarea1">Task Title</label>
          </div>

          <div className="input-field col s6">
            <select ref="publishstatus" defaultValue="">
              <option>Draft</option>
              <option>Published</option>
            </select>
            <label>Publish Status</label>
          </div>
          <div className="input-field col s6">
            <select ref="assignee" defaultValue="Draft">
              <option>Draft</option>
              <option>Published</option>
            </select>
            <label>Assignee</label>
          </div>
        </div>
        <button className="btn-floating waves-effect waves-light theme-color" onClick={this._create.bind(this)}><i
          className="material-icons">add</i></button>
      </section>
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
