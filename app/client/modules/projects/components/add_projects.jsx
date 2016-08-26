import React from 'react';
import Formsy from 'formsy-react';
import MyInput from '../../../utils/form/input';
import TextArea from '../../../utils/form/textarea';

class AddProjects extends React.Component {
  constructor(props) {
    super(props);
  }

  addProject() {
    console.log('submit');
  }

  render() {
    return (
      <section className="Projects-New">
        <h5 className="inline">New Project</h5>
        <a href="/projects/tileview" className="waves-effect waves-light btn theme-color">
          <i className="material-icons right">assignment</i>
          View All Projects</a>
        <div className="row container-padding z-depth-1-half card-top-border">
          <div className="row">
            <Formsy.Form onSubmit={this.addProject.bind(this)} className="login">
              <MyInput name="projectName" title="Project Name" required/>
              <TextArea name="description" title="Description" required/>
              <button className="btn waves-effect waves-light theme-color" type="submit">Start the Project
                <i className="material-icons right">send</i></button>
            </Formsy.Form>
          </div>
        </div>
      </section>
    );
  }
}
export default AddProjects;