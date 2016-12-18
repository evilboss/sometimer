import React from "react";
import PageTitle from "/client/modules/core/components/page_title";
import AvatarEditor from "/client/modules/core/components/avatar_editor";
export default class Profile extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.states = {
      cropperOpen: false,
      img: null,
      croppedImg: "http://www.fillmurray.com/400/400"
    }
  }

  handleFileChange(dataURI) {
    console.log('hanling file change');
    this.setState({
      img: dataURI,
      croppedImg: this.states.croppedImg,
      cropperOpen: true
    });
  }

  handleCrop(dataURI) {
    console.log('hanling crop');
    this.setState({
      cropperOpen: false,
      img: null,
      croppedImg: dataURI
    });
  }

  handleRequestHide() {
    this.setState({
      cropperOpen: false
    });
  }


  render() {
    const user = Meteor.user();
    let {croppedImg, cropperOpen, img} = this.states;
    return (
      <section id="profile">
        <PageTitle title='Account Information'/>
        {(user) ?
          <div className="row">
            <h5>{`${user.profile.firstName} ${user.profile.lastName}`}</h5>
            <div className="col s12 m3 l3">
              <AvatarEditor
                image={(user.profile.displayPhoto) ? user.profile.displayPhoto : '/uploads/defaults/default_user.png'}/>
              {/*
               Todo: make update avatar work
               <img
               src={(user.profile.displayPhoto) ? user.profile.displayPhoto : '/uploads/defaults/default_user.png'}
               alt="dp"
               className="display-photo responsive-img center-block circle"/>*/}
            </div>
            <div className="col s12 m9 l9 no-horizontal-margin row">
              <div className="col s8">
                <table>
                  <tbody>
                  <tr>
                    <th>Email:</th>
                    <td>{(user.emails[0]) ? user.emails[0].address : ''}</td>
                  </tr>
                  <tr>
                    <th>First Name:</th>
                    <td>{(user.profile.firstName) ? user.profile.firstName : ''}</td>
                  </tr>
                  <tr>
                    <th>Last Name:</th>
                    <td>{(user.profile.lastName) ? user.profile.lastName : ''}</td>
                  </tr>
                  <tr>
                    <th>Country:</th>
                    <td>{(user.profile.country) ? user.profile.country : ''}</td>
                  </tr>
                  <tr>
                    <th>Position:</th>
                    <td>{(user.profile.position) ? user.profile.position : ''}</td>
                  </tr>
                  <tr>
                    <th>TimeZone:</th>
                    <td>{(user.profile.timezone) ? user.profile.timezone : ''}</td>
                  </tr>
                  <tr>
                    <th>Skype ID:</th>
                    <td>{(user.profile.skypeID) ? user.profile.skypeID : ''}</td>
                  </tr>
                  <tr>
                    <th>Contact Number:</th>
                    <td>{(user.profile.contactNumber) ? user.profile.contactNumber : ''}</td>
                  </tr>

                  {/*<tr>
                   <th>Department/Team:</th>
                   <td>{(user.profile.department) ? user.profile.department : ''}</td>
                   </tr>*/}
                  </tbody>
                </table>
              </div>
              <a href="/dashboard/profile/edit" className="btn edit waves-effect waves-light theme-color">
                Edit Account
              </a>
            </div>

          </div>
          : ''}
      </section>
    );
  }
}
