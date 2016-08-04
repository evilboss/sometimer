import React from 'react';
import CommentList from '/client/modules/comments/containers/comment_list';
import TaskList from '/client/modules/task/containers/task/task_list';
class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {name, _id} = this.props.project;

    return (
      <section id="project">
        <div>
          Project Name: {name}
        </div>
        <div>
          Project Id: {_id}
        </div>
        <div>
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
