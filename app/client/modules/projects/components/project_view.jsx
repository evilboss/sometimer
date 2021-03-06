import React from 'react';
import CommentList from '/client/modules/comments/containers/comment_list';
import TaskList from '/client/modules/task/containers/task/task_list';
import TaskCreate from '/client/modules/task/containers/task/task_create';
import CreatePhase from './add_phase';
import SubProjectList from '/client/modules/sub_projects/containers/sub_project_list';
import PageTitle from '/client/modules/core/components/page_title';
import {control} from '/lib/access-control/control';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  render() {
    const {userPermissions} = this.props;
    const {name, _id} = (this.props.project) ? this.props.project : {name: '', _id: ''};
    return (
      <section id="project-view">
        <div className="page-title">
          <h5 className="inline">Project Management</h5>
          {
            (userPermissions) ? control.isPermitted('createProject', userPermissions) ?
              <div className="btn-add">
                <a href="/projects/new" className="waves-effect waves-light secondary-color">
                  <span>Add New Project</span>
                  <i className="material-icons">add</i></a>
              </div>
              : '' : ''
          }

          <div className="project-view inline right">
            <a href="/projects/tileview"><i className="material-icons">view_module</i></a>
            <i className="material-icons active">list</i>
          </div>
          <div className="project-title">
            <h5 className="inline">
              Project: {name}
            </h5>
            <div className="collaborators right">
              <p>PROJECT COLLABORATORS</p>
              <img src="/uploads/defaults/teams/default/profiles/jack/JackTorrance.jpg" alt="people"
                   className="circle"/>
            </div>
          </div>
        </div>


        <div className="row">
          <section className="col s12 middle">
            <div className="tabs-background">
              <div className="tabs-wrapper">
                <ul className="tabs">

                  <li className="tab col s3">
                    <a className="active" href="#SUB">SUB PROJECTS</a></li>
                  <li className="tab col s3"><a href="#TASK">TASK</a></li>
                  <li className="tab col s3">
                    <a href="#DISCUSSIONS">DISCUSSIONS</a></li>
                </ul>
              </div>
            </div>


            <section id="DISCUSSIONS" className="col s12">
              <div className="discussion-list">
                <CommentList projectId={_id}/>
              </div>
            </section>

            <section id="SUB" className="col s12">
              <SubProjectList projectId={_id}/>
            </section>

            <section id="TASK" className="col s12">
              {
                (userPermissions) ? control.isPermitted('createTask', userPermissions) ?
                  <TaskCreate projectId={_id}/>
                  : '' : ''
              }
              {
                (userPermissions) ? control.isPermitted('readTask', userPermissions) ?
                  <TaskList projectId={_id}/>
                  : '' : ''
              }
            </section>
          </section>
        </div>
      </section>
    );
  }
}

export default ProjectView;
