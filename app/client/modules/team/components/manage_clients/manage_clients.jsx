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
        <Tabs/>
        <SubTabs target="/dashboard/team/user/new" text="Add New User" permission="createClients"/>
        <section id="manage-clients" className="col s12">
          <div className="row no-margin-bottom">
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
                      src='/uploads/defaults/default_user.png'
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
      </section>


    );
  }
}

export default ManageClients;
