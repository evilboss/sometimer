import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';

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
			<section className="staff-settings">
				<PageTitle title="Staff Settings"/>
				<div className="white-wrapper">
					<h5>The staff that this user can see</h5>
				<form onSubmit={this.saveTeamList.bind(this)}>
					<input name="owner" id="owner" type="hidden" value={this.props.staffId}/>
					<StaffMultiSelect getData={this.getData.bind(this)}/>
					<button className="btn theme-color">Save</button>
				</form>
					</div>
			</section>
		);
	}
}

export default StaffSettings;
