import React from 'react';

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? this._renderError(error) : null}
        <div className="input-field col s12">
          <textarea ref='text' className="materialize-textarea" placeholder='Enter your comment here.'>
        </textarea>
          <label htmlFor="textarea1">Instruction</label>
        </div>
        <button className="btn theme-color waves-effect" onClick={this._create.bind(this)}>Add Instruction</button>
      </div>
    );
  }

  _create() {
    const text = this.refs.text.value;
    const {create, projectId} = this.props;
    create(projectId, text);
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

export default CreateComment;
