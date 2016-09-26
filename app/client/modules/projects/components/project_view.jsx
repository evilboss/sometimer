import React from 'react';
import CommentList from '/client/modules/comments/containers/comment_list';
import TaskList from '/client/modules/task/containers/task/task_list';
import TaskCreate from '/client/modules/task/containers/task/task_create';
import CreatePhase from './add_phase';
import SubProjectList from '/client/modules/sub_projects/containers/sub_project_list';
import PageTitle from '/client/modules/core/components/page_title';

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
    const {name, _id} = (this.props.project) ? this.props.project : {name: '', _id: ''};
    return (
      <section id="project-view">
        <PageTitle title={name}/>
        <div className="row flex">

          <section className="col s12 middle">
            <div className="inner-wrapper">
              <h4>{name}</h4>
              <p>lorem ipsum ....</p>
              <div className="col s7">
                <ul className="tabs">
                  <li className="tab col s3"><a href="#DISCUSSIONS">DISCUSSIONS</a></li>
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
              <TaskCreate projectId={_id}/>
              <TaskList projectId={_id}/>
            </section>
          </section>
        </div>


      </section>
    );
  }
}

export default ProjectView;
