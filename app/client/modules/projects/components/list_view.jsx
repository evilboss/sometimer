import React from 'react';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="project-list">
        <div><h5>ProjectList <span>
          <a href="/projects/new" className="btn-floating waves-effect waves-light theme-color">
            <i className="material-icons">add</i></a></span></h5>
        </div>
        <div className="project-view">
          <a href="/projects/tileview"><i className="material-icons">view_module</i></a>
          <i className="material-icons active">view_list</i>
        </div>
        <div className="collection">
          {this.props.projects.map(project => (
            <a href="#!" key={project._id} className="collection-item">
              <b>{project.name}</b>
            </a>
          ))}
        </div>
      </section>
    );
  }
}

export default ListView;
