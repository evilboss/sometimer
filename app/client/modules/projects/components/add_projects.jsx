import React from 'react';
import Formsy from 'formsy-react';
import MyInput from '../../../utils/form/input';
import TextArea from '../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';




class AddProjects extends React.Component {
  constructor(props) {
    super(props);
  }

  addProject() {
    console.log('submit');
  }

  componentDidMount() {
    $(document).ready(function () {
      $('select').material_select();
    });
  }

  render() {
    return (
      <section className="Projects-New">
        <PageTitle title="Your Projects"/>
        <div className="row flex no-section-margin">

          <div className="col s2 no-horizontal-padding">
            <div className="collection">
              <a href='' className="collection-item">
                <b>project title</b>
              </a>
            </div>
          </div>

          <div className="col s10">
            <section className="create-project">
              <h4>Create A Project</h4>
              <Formsy.Form onSubmit={this.addProject.bind(this)} className="login">
                <MyInput name="projectName" fieldSize="col s4" title="Project Title" required/>
                <MyInput name="projectName" fieldSize="col s4" title="Project ID" required/>
                <div className="row form-group required col s4">
                  <div className="input-field col s12 no-padding">
                    <select>
                      <option value="" disabled selected>Choose your option</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                    <label>Materialize Select</label>
                  </div>
                </div>
                <MyInput name="description" title="Project subtitle" required/>

                <StaffMultiSelect/>
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