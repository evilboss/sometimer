import React from 'react';

class ApprovalButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="ui right btn waves-effect waves-light theme-color">Approve</button>
    );
  }
}

export default ApprovalButton;
