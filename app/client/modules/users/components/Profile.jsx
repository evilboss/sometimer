import React from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends React.Component {

  constructor(props, context) {
    super(props, context);
   
  };


  render() {
    const user = Meteor.user();
    return (
      <section id="profile">
        <h5 className="title">My Account</h5>
        {(user) ?
          <div className="row">
            <div className="col s12 m2 l2">
              <img
                src={(user.profile.displayPhoto)?user.profile.displayPhoto:'http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'}
                alt="dp"
                className="display-photo responsive-img center-block"/>
            </div>

            <div className="col s12 m10 l10 no-horizontal-margin row z-depth-1-half card-top-border">
              <h5>Account Information
                <span className="icon-span">
                  <a href="/dashboard/profile/edit" className="btn-floating waves-effect waves-light theme-color">
                  <i className="material-icons">edit</i></a></span></h5>
              <ul className="collection">
                <li className="collection-item">Email: <span>{(user.emails[0]) ? user.emails[0].address : ''}</span>
                </li>
                <li className="collection-item">First Name:
                  <span>{(user.profile.firstName) ? user.profile.firstName : ''}</span></li>
                <li className="collection-item">Last Name:
                  <span>{(user.profile.lastName) ? user.profile.lastName : ''}</span></li>
                <li className="collection-item">Department:
                  <span>{(user.profile.department) ? user.profile.department : ''}</span></li>
                <li className="collection-item">Designation:
                  <span>{(user.profile.jobTitle) ? user.profile.jobTitle : ''}</span></li>
                <li className="collection-item">Status:
                  <span>{(user.profile.staffType) ? user.profile.staffType : ''}</span></li>
              </ul>
            </div>

          </div>
          : ''}
      </section>
    );
  }
}
