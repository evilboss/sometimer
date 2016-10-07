import React from 'react';
import SubTabs from '/client/modules/team/containers/sub_tabs';


class AddNewStaff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SubTabs />
        <div className="border-top row no-margin-bottom relative">
          <div className="col s12 no-padding">
            <div className="col s6">

            </div>
            <div className="col s6">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewStaff;
