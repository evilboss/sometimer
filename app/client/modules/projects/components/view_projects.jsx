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
      <section className="project-list">
        <div className="page-title">
          <h5 className="inline">ProjectList</h5>
          <div className="project-view inline">
            <i className="material-icons active">view_module</i>
            <a href="/projects/listview"><i className="material-icons">list</i></a>
          </div>
        </div>


        <div className="row">
          <div className="col s2 center-align">
            {
              (userPermissions) ? control.isPermitted('createProject', userPermissions) ?
                <div className="btn-add">
                  <a href="/projects/new" className="waves-effect waves-light secondary-color">
                    <i className="material-icons">add</i></a>
                  <h6>New Project</h6>
                </div>
                : '' : ''
            }
          </div>
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