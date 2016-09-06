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
        <h4>Instructions</h4>

        <div>
          <CreateComment projectId={projectId}/>
        </div>
        <div className="instruction-list">
          {comments.length === 0 ? <p>No Comments Yet!</p> : null}
          <table>
            <tbody>
            {comments.map(comment => (
              <tr key={comment._id}>
                <td className="avatar">img</td>
                <td className="who"><Username userId={comment.author}/></td>
                <td className="what">{comment.text}</td>
                <td className="when">{comment.text}</td>
                {comment.saving ? '...' : null}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default CommentList;
