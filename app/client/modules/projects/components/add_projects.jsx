import React from 'react';
import Formsy from 'formsy-react';
import MyInput from '../../../utils/form/input';
import TextArea from '../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';
import ProjectQuickView from '/client/modules/projects/containers/project_quick_view';

class AddProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: []
    }
  }

  componentDidMount() {
    $(document).ready(function () {
      $('select').material_select();
    });
  }

  getData(data) {
    this.setState({staffList: data})
  }

  addProject(project) {
    project.collaborators = this.state.staffList;
    project.collaborators.push(Meteor.userId());
    Meteor.call('projects.insert', project);
    FlowRouter.go('/projects/tileview');
  }

  render() {
    return (
      <section className="Projects-New">
        <PageTitle title="Your Projects"/>
        <div className="row flex no-section-margin">

          <div className="col s2 no-horizontal-padding">
              <ProjectQuickView/>
          </div>

          <div className="col s10">
            <section className="create-project">
              <h4>Create A Project</h4>
            <Formsy.Form onSubmit={this.addProject.bind(this)} className="login">
              <MyInput name="name" ref="name" fieldSize="col s4" title="Project Title" required/>
              <div className="row form-group required col s4">
                <div className="input-field col s12 no-padding">
                  <select>
                    <option defaultValue="Choose your option" disabled></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <label>Materialize Select</label>
                </div>
              </div>


              <TextArea name="description" title="Description" required/>
              <StaffMultiSelect getData={this.getData.bind(this)}/>
              <button className="btn waves-effect waves-light theme-color" type="submit">Start the Project
                <i className="material-icons right">send</i></button>

            </Formsy.Form>
              </section>
          </div>
        </div>
      </section>
    );
  }
}
export default AddProjects;