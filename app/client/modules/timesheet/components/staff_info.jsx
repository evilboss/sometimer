import React from 'react';
import UserInfo from '/client/modules/users/libs/user';

class StaffInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className="col s12 m6 l6">
          <table>
            <tbody>
            {console.log(UserInfo)}

            <tr>
              <th>Name:</th>
              <th>{/*currentUser.profile.firstName*/}</th>
            </tr>
            <tr>
              <th>Department:</th>
              <td>Department</td>
            </tr>
            <tr>
              <th>Designation:</th>
              <td>Designation</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="col s12 m6 l6">
          <table>
            <tbody>
            <tr>
              <th>Status:</th>

            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StaffInfo;
