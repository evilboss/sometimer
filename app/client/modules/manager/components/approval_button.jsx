import React from 'react';

class ApprovalButton extends React.Component {
  constructor(props) {
    super(props);
  }
  approveTimelog(e){
    this.props.approveTimelog(this.props.timelogId);
  }
  render() {
    return (
      <button onClick={this.approveTimelog.bind(this)} className="ui right btn waves-effect waves-light theme-color">Approve</button>
    );
  }
}

export default ApprovalButton;
