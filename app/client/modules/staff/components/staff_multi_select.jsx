import React from 'react';
import SelectPopover from 'react-select-popover';

class StaffMultiSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(obj) {
    console.log("EVENT", obj.event); // "added" or "removed"
    console.log("ITEM", obj.item);   // item that has been added/removed { label: '...', value: '...' }
    console.log("VALUE", obj.value); // [{label: '...', value: '...'}, {label: '...', value: '...'}]
  }

  render() {
    const staffList = this.props.staffList;
    let options = [];
    _.each(staffList, function (staff) {
      console.log(staff);
      options.push({label: staff.profile.firstName + ' ' + staff.profile.lastName, value: staff._id})
    });
    var selectFieldName = "collaborators";
    var selectPlaceholder = "Select Collaborators...";
    return (
      <SelectPopover
        options={options}
        name={selectFieldName}
        selectPlaceholder={selectPlaceholder}
        onChange={ this.onChange.bind(this)}
      />
    );
  }
}

export default StaffMultiSelect;
