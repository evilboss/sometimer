import React from 'react';

class Username extends React.Component {
  constructor(props) {
    super(props);
  }
  userRole(){
    const {profile} = this.props.user;
  }
  render() {
    const {profile} = this.props.user;
    const {firstName,lastName} = profile;
    return (
      <b>
        {firstName}
      </b>
    );
  }
}

export default Username;
