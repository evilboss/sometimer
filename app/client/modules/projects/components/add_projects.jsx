import React from 'react';
import Formsy from 'formsy-react';
import MyInput from '../../../utils/form/input';
import TextArea from '../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';
import ProjectQuickView from '/client/modules/projects/containers/project_quick_view';
/*TODO:@aaron project create fields*/
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
          <div className="col s12">
            <section className="create-project">
              <h4>Create A Project</h4>
              <Formsy.Form onSubmit={this.addProject.bind(this)} className="login">
                <MyInput name="name" ref="name" fieldSize="col s6" title="Project Title" required/>
                <div className="row form-group required col s6">
                  <div className="input-field col s12 no-padding">
                    <label>Publish Settings</label>
                    <select>
                      <option defaultValue="Choose your option" disabled></option>
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
                <div className="row form-group required col s12 no-padding">
                  <TextArea name="description" title="Description" required/>
                </div>
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