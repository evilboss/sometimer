import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
class SubCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: []
    }
  }

  getData(data) {
    this.setState({staffList: data})
  }

  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? this._renderError(error) : null}

        <div class="input-field col s6">
          <input id="name" ref="name" type="text" class="validate"/>
          <label for="name">Subproject Title</label>
        </div>

        <div className="input-field col s12">
          <textarea ref='details' placeholder='Details your comment here.' className="materialize-textarea">
        </textarea>
          <label htmlFor="textarea1">Details</label>
        </div>

        <StaffMultiSelect getData={this.getData.bind(this)}/>
        <button className="btn waves-effect waves-light theme-color" onClick={this._create.bind(this)}>Add
          Sub-Project
        </button>
      </div>
    );
  }

  _create() {
    const subProject = {
      projectId: this.props.projectId,
      name: this.refs.name.value,
      details: this.refs.details.value,
    };
    subProject.collaborators = this.state.staffList;
    subProject.collaborators.push(Meteor.userId());
    const {create, projectId} = this.props;
    create(subProject);
    this.refs.name.value = '';
    this.refs.details.value = '';
    this.setState({staffList: []});
  }

  _renderError(error) {
    return (
      <div className='error'>
        {error}
      </div>
    );
  }
}

export default SubCreate;
