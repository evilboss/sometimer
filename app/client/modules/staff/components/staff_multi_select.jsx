import React from 'react';
import SelectPopover from 'react-select-popover';

class StaffMultiSelect extends React.Component {
  constructor(props) {
    super(props);

  }

  onChange(obj) {
    if (this.props.getData) {
      const staffs = [];
      this.props.getData(_.pluck(obj.value, 'value'));
    }
  }


  render() {
    const {staffList} = this.props;
    let options = [];
    _.each(staffList, function (staff) {
      options.push({label: staff.profile.firstName + ' ' + staff.profile.lastName, value: staff._id})
    });
    var selectFieldName = "collaborators";
    var selectPlaceholder = "Select Members";
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
