import React from 'react';

class Username extends React.Component {
  constructor(props) {
    super(props);
  }

  userRole() {
    const {profile} = this.props.user;
  }

  render() {
    const {profile} = this.props.user;
    const {firstName, lastName} = profile;
    return (
      <div className="content-padding">
        <b>
          {firstName}
        </b>
      </div>
    );
  }
}

export default Username;
