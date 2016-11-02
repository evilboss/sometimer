import React from 'react';
import Quickform from '/client/modules/reactUtils/components/quickform';
import Formsy from 'formsy-react';
import MyInput from '../../../utils/form/input';
import UploadFile from '/client/modules/team/containers/upload_file';

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
            <div className="col s12 center-align">
              <img
                src={(user.profile.displayPhoto)?user.profile.displayPhoto:'/uploads/defaults/default_user.png'}
                alt="dp"
                className="display-photo responsive-img center-block"/>
              <UploadFile methodType="updateDisplayPhoto" text="Change Display Photo"/>
            </div>
          </div>
          : ''}
      </section>
    );
  }
}

export default ProfileEdit;
