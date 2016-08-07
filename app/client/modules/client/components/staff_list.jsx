import React from 'react';

class StaffList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="staff-list">
        <h5>Staff List</h5>
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle"/>
            <span className="title">Name</span>
            <p>details<br/>
              Position
            </p>
          </li>
        </ul>

      </section>
    );
  }
}

export default StaffList;
