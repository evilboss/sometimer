import React from 'react';
import CommentList from '/client/modules/comments/containers/comment_list';
import TaskList from '/client/modules/task/containers/task/task_list';
import TaskCreate from '/client/modules/task/containers/task/task_create';
import CreatePhase from './add_phase';
import PageTitle from '/client/modules/core/components/page_title';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {name, _id} = this.props.project;
    return (
      <section id="project-view">
        <PageTitle title={name}/>
        <CreatePhase projectId={_id}/>
        <TaskCreate projectId={_id}/>
        <TaskList projectId={_id}/>
        <CommentList projectId={_id}/>
      </section>
    );
  }
}

export default ProjectView;
