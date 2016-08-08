import React from 'react';
import CommentList from '/client/modules/comments/containers/comment_list';
import TaskList from '/client/modules/task/containers/task/task_list';
import TaskCreate from '/client/modules/task/containers/task/task_create';
class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {name, _id} = this.props.project;
    return (
      <section id="project" className="container">
        <div>
          <h4>Project Name: {name}</h4>
        </div>
        <div>
          <h5>Project Id: {_id}</h5>
        </div>
        <div>
          <TaskCreate projectId={_id}/>
          <TaskList projectId={_id}/>
        </div>
        <div>
          <CommentList projectId={_id}/>
        </div>
      </section>
    );
  }
}

export default ProjectView;
