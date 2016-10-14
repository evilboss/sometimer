import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
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
            <section id="manage-clients" className="col s12">
              <SubTabs target="/dashboard/manage-clients/new" text="Add New Client" permission="createClients"/>
              <div className="border-top row no-margin-bottom relative">
                <div className="col s12 no-padding">
                  <table className="bordered">
                    <thead>
                    <tr>
                      <th>Clients</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <img
                          src='http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'
                          alt="Staff" className="circle responsive-img dp-small left"/>
                        <div className="col staff-details no-margin">
                          <h6>Client Name<br/>
                            <small>Company Name</small>
                          </h6>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>


    );
  }
}

export default ManageClients;