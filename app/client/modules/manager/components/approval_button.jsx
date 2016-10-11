import React from 'react';

class ApprovalButton extends React.Component {
  constructor(props) {
    super(props);
  }

  approveTimelog(e) {
    e.preventDefault();
    this.props.approveTimelog(this.props.timelogId);
  }

  declineTimelog(e) {
    e.preventDefault();
    this.props.declineTimelog(this.props.timelogId);
  }

  render() {
    return (
      <div className="approval-btn">
        <div className="status-indicator Pending"></div>
        <button className="btn done theme-color"><i
          className="material-icons" onClick={this.approveTimelog.bind(this)}>done</i></button>
        <button className="btn cancel" onClick={this.declineTimelog.bind(this)}><i
          className="material-icons">clear</i></button>
      </div>
    );
  }
}

export default ApprovalButton;
