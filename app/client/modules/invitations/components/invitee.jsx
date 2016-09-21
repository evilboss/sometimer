import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

class Invitee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{paddingTop: '5em'}}>
        <PageTitle title='Thanks for activating your account'/>
      </div>
    );
  }
}

export default Invitee;
