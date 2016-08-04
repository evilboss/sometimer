import React from 'react';

class Username extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.user);
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
