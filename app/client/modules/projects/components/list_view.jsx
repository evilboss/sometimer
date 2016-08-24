import React from 'react';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="project-list">
        <div className="page-title">
          <h5 className="inline">ProjectList</h5>

          <div className="project-view inline">
            <a href="/projects/tileview"><i className="material-icons ">view_module</i></a>
            <i className="material-icons active">list</i>
          </div>
        </div>


        <div className="row">
          <div className="col s2 center-align">
            <div className="btn-add">
              <a href="/projects/new" className="waves-effect waves-light theme-color">
                <i className="material-icons">add</i></a>
              <h6>New Project</h6>
            </div>
          </div>
          <div className="col s10">
            <div className="collection">
              {this.props.projects.map(project => (
                <a href={`/project/${project._id}`} key={project._id} className="collection-item">

                  <b>{project.name}</b>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ListView;
