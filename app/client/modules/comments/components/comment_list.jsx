import React from 'react';
import moment from 'moment';
import CreateComment from '../containers/create_comment';
import Username from '/client/modules/users/containers/username';
class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comments = this.props.comments;
    let projectId = this.props.projectId;
    const format = 'dddd, D MMMM YYYY hh:mm A z';
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
                <td className="avatar"></td>
                <td className="who">
                  <span>
                  <Username userId={comment.author}/>
                    </span>
                </td>
                <td className="what">{comment.text}</td>
                <td className="when">{moment(comment.createdAt).tz('Asia/Manila').format(format)}</td>
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
