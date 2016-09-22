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
          <textarea ref='comment' className="materialize-textarea" placeholder='Enter your comment here.'>
        </textarea>
          <label htmlFor="textarea1">Instruction</label>
        </div>
        <button className="btn theme-color waves-effect" onClick={this._create.bind(this)}>Add Instruction</button>
      </div>
    );
  }

  _create() {
    const {create, projectId} = this.props;
    const text = this.refs.comment.value;
    console.log(create, projectId);
    create(projectId, text);
    this.refs.comment.value = '';
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
