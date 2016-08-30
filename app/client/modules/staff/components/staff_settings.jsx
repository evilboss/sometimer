import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';

class StaffSettings extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				Staff-Settings
				The staff that this user can see
				<form>
					<input name="owner" id="owner" type="hidden" value={this.props.staffId}/>
					<StaffMultiSelect/>
					<button>Save</button>
				</form>
			</div>
		);
	}
}

export default StaffSettings;
