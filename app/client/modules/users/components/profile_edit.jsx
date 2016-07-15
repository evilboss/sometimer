import React from 'react';
import Quickform from '/client/modules/reactUtils/components/quickform';
import Formsy from 'formsy-react';
import MyInput from './input';
import Dropzone from 'react-dropzone';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidUpdate = ()=> {
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

            }
          });
        });
      };
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
                src={(user.profile.displayPhoto)?'/uploads/'+user.profile.displayPhoto:'http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'}
                alt="dp"
                className="display-photo responsive-img center-block"/>

              <Dropzone onDrop={this.onDrop}>
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
            </div>
            <div className="col s12 m10 l10 no-horizontal-margin row z-depth-1-half card-top-border">

              <Formsy.Form onSubmit={this.onSubmit} onValid={this.validSubmit} onInvalid={this.invalidSubmit}
                           className="login">
                <MyInput name="oldPassword" title="oldPassword" type="password"/>
                <MyInput name="newPassword" title="newPassword" type="password"/>
                <button className="btn waves-effect waves-light theme-color" type="submit">Change Password
                  <i className="material-icons right">send</i></button>
              </Formsy.Form>


              {<Quickform
                buttonText="Update Profile"
                field={this.props.users}
                doc={this.props.user}
                ommited="emails,profile.status,services,createdAt,roles,profile.displayPhoto"
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
