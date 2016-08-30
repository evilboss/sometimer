import React from 'react';

class UserDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const currentUser = this.props.currentUser;
		return (
			<div>
				{(currentUser) ?
					<section className="user-details">
						{(currentUser.profile) ?
							<div className="row">
								<div className="col s12 m6 l6">
									<div className="col s4">
										<img
											src={(currentUser.profile.displayPhoto) ? `/uploads/${currentUser.profile.displayPhoto}` : '/uploads/defaults/default-img.png'}
											alt="dp"
											className="display-photo responsive-img center-block circle"/>
									</div>
									<div className="col s8">
										<table>
											<tbody>
											<tr>
												<th>Name:</th>
												<td>{(currentUser.profile.firstName) ? currentUser.profile.firstName : ''} {(currentUser.profile.lastName) ? currentUser.profile.lastName : ''} </td>
											</tr>
											<tr>
												<th>Department:</th>
												<td>{(currentUser.profile.department) ? currentUser.profile.department : ''}</td>
											</tr>
											<tr>
												<th>Designation:</th>
												<td>{(currentUser.profile.jobTitle) ? currentUser.profile.jobTitle : ''}</td>
											</tr>
											<tr>
												<th>Status:</th>
												<td>{(currentUser.profile.staffType) ? currentUser.profile.staffType : ''}</td>
											</tr>
											</tbody>
										</table>
									</div>
								
								</div>
							</div>
							: 'Please wait'}
					</section>
					: 'please wait more'}
			</div>
		);
	}
}

export default UserDetails;
