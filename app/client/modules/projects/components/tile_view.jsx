import React from 'react';
import StaffDp from '/client/modules/users/containers/staff_dp';
import DisplayManager from '/client/modules/manager/containers/display_manager';

var TileView = React.createClass({

  render() {
    return (
      <div className="col s12">
        {this.props.projects.map(project=> (
          <a href={`/projects/${project._id}`} key={project._id} className="collection-item">
            <article className="col s12 m6 l4">
              <div className="card">
                <div className="card-title">{project.name}</div>
                <div className="clearfix">
                  <i className="right material-icons close">delete_forever</i>
                </div>
                <div className="card-content">
                  <p className="subtext">{project.description}</p>
                </div>
                <div className="card-action">
                  {project.collaborators.map((collaborator, key)=>(
                    (key <= 4) ? <StaffDp key={key} projectId={project._id} userId={collaborator}/> : ''
                  ))}
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    );
  }
});

export default TileView;
