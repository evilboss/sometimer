import React from 'react';
import SubTabs from '/client/modules/team/containers/sub_tabs';

class StaffDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="staff-details">
        <SubTabs />
        <div className="border-top row no-margin-bottom relative">
          <div>
            <img
              src='http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'
              alt="Team Lead" className="circle responsive-img dp-medium "/>
          </div>
        </div>
      </section>
    );
  }
}

export default StaffDetails;
