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
        <h4>Discussions</h4>
        <div className="row border-top">
          <div className="instruction-list col s5">
            {comments.length === 0 ? <p>No Comments Yet!</p> : null}
            <table>
              <tbody>
              {comments.map(comment => (
                <tr key={comment._id}>
                  <td className="avatar center-align">
                    <img src="/uploads/defaults/teams/default/profiles/jack/JackTorrance.jpg" alt="people"
                         className="circle dp-xs center-block"/>
                    <Username userId={comment.author}/>
                  </td>
                  <td className="what">
                    {comment.text}
                    <div>{moment(comment.createdAt).tz('Asia/Manila').format(format)}</div>
                  </td>
                  {comment.saving ? '...' : null}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className="col s7">
            <CreateComment projectId={projectId}/>
          </div>
        </div>
      </section>
    );
  }
}

export default CommentList;
