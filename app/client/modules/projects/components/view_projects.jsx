import React from 'react';
import ReactDOM from 'react-dom';
import TileView from './tile_view';
import ListView from './list_view';
import {control} from '/lib/access-control/control';
class ViewProjects extends React.Component {
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
              <div className="btn btn-add">
                <a href="/projects/new" className="waves-effect waves-light secondary-color">
                  <i className="material-icons">add</i>
                  <span>Add New Project</span>
                </a>
              </div>
              : '' : ''
          }

          <div className="project-view inline right">
            <i className="material-icons active">view_module</i>
            <a href="/projects/listview"><i className="material-icons">list</i></a>
          </div>
        </div>
        <div className="row">
          {
            (userPermissions) ? control.isPermitted('readProject', userPermissions) ?
              <TileView projects={projects}/>
              : '' : ''
          }
        </div>
      </section>
    );
  }
}

export default ViewProjects;