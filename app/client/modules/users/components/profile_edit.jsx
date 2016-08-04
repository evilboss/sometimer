import React from 'react';
import Quickform from '/client/modules/reactUtils/components/quickform';
import Dropzone from 'react-dropzone';
import Formsy from 'formsy-react';
import MyInput from './input';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = (files)=> {
      console.log('Received files: ', files);
      _.each(files, function (file) {
        file.owner = Meteor.userId(); //before upload also save the owner of that file
        Images.insert(file, function (err, fileObj) {
          console.log(fileObj);
          if (err) {
            console.log(err); //in case there is an error, log it to the console
          } else {
            console.log(file);
            console.log("Success -> File Id: ->", fileObj._id);
            let imagePath = 'images-' + fileObj._id + '-' + file.name;

            console.log(Meteor.call('user.update-photo', Meteor.userId(), imagePath));
            sweetAlert("Success!", "Click OK to close", "success");
          }
        });
      });
    };
    this.onSubmit = (data)=> {
      this.props.submitAction(data.oldPassword, data.newPassword);

    };
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
                src={(user.profile.displayPhoto)?'/uploads'+user.profile.displayPhoto:'/uploads/default-img.png'}
                alt="dp"
                className="display-photo responsive-img center-block"/>

              <Dropzone className="dropzone-wrapper" onDrop={this.onDrop}>
                <div className="dropzone-container">Drop File here or click to upload.
                </div>
              </Dropzone>
            </div>
            <div className="col s12 m10 l10">
              <h5 className="title">Account Information</h5>
              <div className="no-horizontal-margin row z-depth-1-half card-top-border">
                {<Quickform
                  buttonText="Update Profile"
                  field={this.props.users}
                  doc={this.props.user}
                  ommited="emails,profile.status,services,createdAt,roles,profile.displayPhoto"
                  operation="update"
                  name="updateProfileForm"
                />}
              </div>
              <h5 className="title">Account Password</h5>
              <div className="no-horizontal-margin row z-depth-1-half card-top-border">
                <Formsy.Form onSubmit={this.onSubmit} onValidSubmit={this.onSubmit} className="login">
                  <MyInput name="oldPassword" title="oldPassword" type="password"/>
                  <MyInput name="newPassword" title="newPassword" type="password"/>
                  <div className="row">
                    <div className="col s12">
                      <button className="btn waves-effect waves-light theme-color" type="submit">Change Password
                      </button>
                    </div>
                  </div>
                </Formsy.Form>
              </div>
            </div>
          </div>
          : ''}
      </section>
    );
  }
}

export default ProfileEdit;
