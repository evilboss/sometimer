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
        <PageTitle title={name}/>
        <div className="row">
          <section className="col s12 middle">
            <div className="tabs-background">
              <div className="tabs-wrapper">
                <ul className="tabs">
                  <li className="tab col s3">
                    <a className="active" href="#DISCUSSIONS">DISCUSSIONS</a></li>
                  <li className="tab col s3"><a href="#SUB">SUB PROJECTS</a></li>
                  <li className="tab col s3"><a href="#TASK">TASK</a></li>
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
