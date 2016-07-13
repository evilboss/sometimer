import React from 'react';
import Quickform from '/client/modules/reactUtils/components/quickform';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = Meteor.user();
    return (
      <section id="edit-profile">
        <h5 className="title">Edit Profile</h5>
        {(user) ?
          <div className="row">
            <div className="col s12 m2 l2">
              <img
                src={(user.profile.displayPhoto)?user.profile.displayPhoto:'http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'}
                alt="dp"
                className="display-photo responsive-img center-block"/>
            </div>
            <div className="col s12 m10 l10 no-horizontal-margin row z-depth-1-half card-top-border">
              {<Quickform
                buttonText="Update Profile"
                field={this.props.users}
                doc={this.props.user}
                ommited="emails,profile.status,services,createdAt,roles"
                operation="update"
                name="updateProfileForm"
              />}
            </div>
          </div>
          : ''}
      </section>
    );
  }
}

export default ProfileEdit;
