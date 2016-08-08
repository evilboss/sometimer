import React from 'react';

class ApprovalButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row approve-btn">
        <button className="ui right btn waves-effect waves-light theme-color">Approve</button>
      </div>
    );
  }
}

export default ApprovalButton;
