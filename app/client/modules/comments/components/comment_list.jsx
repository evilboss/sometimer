import React from 'react';
import CreateComment from '../containers/create_comment';
import Username from '/client/modules/users/containers/username';
class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('render called');
    let comments = this.props.comments;
    let projectId = this.props.projectId;
    return (
      <section className="comments white-wrapper">
        <h4>Comments</h4>

        <div>
          <CreateComment projectId={projectId}/>
        </div>
        <div className="comment-list">
          {comments.length === 0 ? <p>No Comments Yet!</p> : null}
          {comments.map(comment => (
            <div key={comment._id} className="comment">
              <Username userId={comment.author}/>:{comment.text}
              {comment.saving ? '...' : null}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default CommentList;
