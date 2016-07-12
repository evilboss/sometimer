import React from 'react';
import Quickform from '/client/modules/reactUtils/components/quickform';

class AddProjects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="Projects-New">
        <h5 className="inline">New Project</h5> <a href="/projects" className="waves-effect waves-light btn theme-color">
        <i className="material-icons right">assignment</i>
        View All Projects</a>
        <div className="row container-padding z-depth-1-half card-top-border">
          {<Quickform
            buttonText="Save Project"
            field={this.props.projects}
            operation="insert"
            name="insertProjectForm"
          />}
        </div>
      </section>
    );
  }
}
export default AddProjects;