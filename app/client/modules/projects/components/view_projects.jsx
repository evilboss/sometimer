import React from 'react';

class ViewProjects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="project-list">
        <div><h5>ProjectList <span><a href="projects/new" className="btn-floating waves-effect waves-light theme-color"> <i
          className="material-icons">add</i></a></span></h5>
        </div>
        {this.props.projects.map(project=> (
          <a href="#!" key={project._id} className="collection-item">
            <b>{project.name}</b>
          </a>
        ))}
      </section>
    );
  }
}
export default ViewProjects;