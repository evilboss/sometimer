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
        <input type="text" ref="name"/>
        <textarea ref='details' placeholder='Details your comment here.'>
        </textarea>
        <StaffMultiSelect getData={this.getData.bind(this)}/>
        <button onClick={this._create.bind(this)}>Add Sub-Project</button>
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
