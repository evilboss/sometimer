import React from 'react';

class StartTaskButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let role = this.props.user.profile.role;
    return (
      <div>
        {(role =='staff')?<button className="btn btn-small">Start TASK</button>:''}
      </div>
    );
  }
}

export default StartTaskButton;
