import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';

class StaffSettings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			staffList: null
		}
	}
	
	getData(data) {
		this.setState({staffList: data})
	}
	
	saveTeamList(e) {
		e.preventDefault();
		Meteor.call('teamlist.insert', this.props.staffId, this.state.staffList);
	}
	
	render() {
		return (
			<div>
				Staff-Settings
				The staff that this user can see
				<form onSubmit={this.saveTeamList.bind(this)}>
					<input name="owner" id="owner" type="hidden" value={this.props.staffId}/>
					<StaffMultiSelect getData={this.getData.bind(this)}/>
					<button>Save</button>
				</form>
			</div>
		);
	}
}

export default StaffSettings;
