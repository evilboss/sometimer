import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';

class StaffSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="staff-settings">
        <PageTitle title="Staff Settings"/>
        <div className="white-wrapper">
          <h5>The staff that this user can see</h5>
          <form>
            <input name="owner" id="owner" type="hidden" value={this.props.staffId}/>
            <StaffMultiSelect/>
            <button className="btn theme-color">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

export default StaffSettings;
