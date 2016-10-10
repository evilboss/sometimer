import React from 'react';
import SubTabs from '/client/modules/team/containers/sub_tabs';

class ManageClients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SubTabs target="/clients/add" text="Add Clients" permission="createClients"/>
      </div>
    );
  }
}

export default ManageClients;
