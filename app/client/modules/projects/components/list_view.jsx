import React from 'react';
import {control} from '/lib/access-control/control';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userPermissions, projects} = this.props;
    return (
      <section className="project-list twbs">
        <div className="page-title">
          <h5 className="inline">Project Management</h5>
          {
            (userPermissions) ? control.isPermitted('createProject', userPermissions) ?
              <div className="btn-add">
                <a href="/projects/new" className="waves-effect waves-light secondary-color">
                  <i className="material-icons">add</i>
                  <span>Add New Project</span>
                </a>
              </div>
              : '' : ''
          }

          <div className="project-view inline right">
            <a href="/projects/tileview"><i className="material-icons">view_module</i></a>
            <i className="material-icons active">list</i>
          </div>
        </div>


        <div className="row">
          <div className="col s12">
            <div className="collection">
              {
                (userPermissions) ? control.isPermitted('readProject', userPermissions) ?
                  projects.map(project => (
                    <a href={`/projects/${project._id}`} key={project._id} className="collection-item">
                      <b>{project.name}</b>
                    </a>
                  ))
                  : '' : ''
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ListView;
