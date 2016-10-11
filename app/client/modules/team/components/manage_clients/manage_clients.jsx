import React from 'react';
import SubTabs from '/client/modules/team/containers/sub_tabs';

class ManageClients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="team">
        <PageTitle title="All Team"/>
        <div className="row tabs-wrapper">
          <Tabs/>
          <div className="col s12 tabs-content no-padding">
            <section id="manage-staff" className="col s12">
              <SubTabs target="/clients/add" text="Add Clients" permission="createClients"/>
            </section>
          </div>
        </div>
      </section>


    );
  }
}

export default ManageClients;
