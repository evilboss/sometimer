import React from 'react';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

class AddNewStaff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="add-new-staff">
        <SubTabs />
        <div className="border-top row no-margin-bottom relative">
          <form>
            <div className="col s12 no-padding">
              <div className="col s6">
                <div className="input-field col s12">
                  <input id="name" ref="name" type="text" className="validate"/>
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s12">
                  <input id="department" ref="department" type="text" className="validate"/>
                  <label htmlFor="departmenr">Department</label>
                </div>
                <div className="input-field col s12">
                  <input id="position" ref="position" type="text" className="validate"/>
                  <label htmlFor="position">Position</label>
                </div>
                <div className="input-field col s12">
                  <input id="dateHired" ref="dateHired" type="text" className="validate"/>
                  <label htmlFor="dateHired">Date Hired (optional)</label>
                </div>
                <div className="input-field col s12">
                  <input id="email" ref="email" type="email" className="validate"/>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
          <textarea ref='positionDescription' className="materialize-textarea">
        </textarea>
                  <label htmlFor="textarea1">Brief description of position (optional)</label>
                </div>
              </div>
              <div className="col s6">
                <div className="col s12">
                  <div>
                    <div className="grey-text">Work Time</div>
                    <div>
                      <TimePicker
                        style={{ width: 100 }}
                        defaultValue={moment()}
                        className="work-time-start"
                        onChange={this.onChange}
                      /> to <TimePicker
                      style={{ width: 100 }}
                      defaultValue={moment()}
                      className="work-time-end"
                      onChange={this.onChange}
                    />
                    </div>
                  </div>
                  <table>
                    <thead>
                    <tr>
                      <th>Set Permissions</th>
                      <th className="center">View</th>
                      <th className="center">Manage</th>
                      <th className="center">Invite</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Clients</td>
                      <td className="center">
                        <input type="checkbox" id="client-view"/>
                        <label htmlFor="client-view"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="client-manage"/>
                        <label htmlFor="client-manage"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="client-invite"/>
                        <label htmlFor="client-invite"></label>
                      </td>
                    </tr>
                    <tr>
                      <td>Staff</td>
                      <td className="center">
                        <input type="checkbox" id="staff-view"/>
                        <label htmlFor="staff-view"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="staff-manage"/>
                        <label htmlFor="staff-manage"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="staff-invite"/>
                        <label htmlFor="staff-invite"></label>
                      </td>
                    </tr>
                    <tr>
                      <td>Managers</td>
                      <td className="center">
                        <input type="checkbox" id="managers-view"/>
                        <label htmlFor="managers-view"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="managers-manage"/>
                        <label htmlFor="managers-manage"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="managers-invite"/>
                        <label htmlFor="managers-invite"></label>
                      </td>
                    </tr>
                    <tr>
                      <td>Executive Team</td>
                      <td className="center">
                        <input type="checkbox" id="executive-view"/>
                        <label htmlFor="executive-view"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="executive-manage"/>
                        <label htmlFor="executive-manage"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="executive-invite"/>
                        <label htmlFor="executive-invite"></label>
                      </td>
                    </tr>
                    <tr>
                      <td>Team Leaders</td>
                      <td className="center">
                        <input type="checkbox" id="leaders-view"/>
                        <label htmlFor="leaders-view"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="leaders-manage"/>
                        <label htmlFor="leaders-manage"></label>
                      </td>
                      <td className="center">
                        <input type="checkbox" id="leaders-invite"/>
                        <label htmlFor="leaders-invite"></label>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div className="right save">
                    <button className="btn">Save and Invite</button>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default AddNewStaff;
