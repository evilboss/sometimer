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
        <textarea ref='text' placeholder='Enter your comment here.'>

        </textarea>
        <br />
        <button onClick={this._create.bind(this)}>Add Comment</button>
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