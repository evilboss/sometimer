import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

export default class Profile extends React.Component {

  constructor(props, context) {
    super(props, context);

  };


  render() {
    const user = Meteor.user();
    console.log(user);
    return (
      <section id="profile">
        <PageTitle title='Account Information'/>
        {(user) ?
          <div className="row">
            <h5>{`${user.profile.firstName} ${user.profile.lastName}`}</h5>
            <div className="col s12 m2 l2">
              <img
                src={(user.profile.displayPhoto) ? user.profile.displayPhoto : '/uploads/defaults/default_user.png'}
                alt="dp"
                className="display-photo responsive-img center-block circle"/>
            </div>
            <div className="col s12 m10 l10 no-horizontal-margin row">

              <div class="col s8">
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
                    <th>Department/Team:</th>
                    <td>{(user.profile.department) ? user.profile.department : ''}</td>
                  </tr>
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
