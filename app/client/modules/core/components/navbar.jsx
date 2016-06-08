import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = ()=> {
      $(".button-collapse").sideNav();
    };
   
  };


  render() {
    return (
      <section id="navbar">
        <nav id="horizontal-nav" className="white hide-on-med-and-down">
          <div className="nav-wrapper center center-align">
            <ul className="hide-on-med-and-down">
              <li>
                <a href="/" className="cyan-text">
                  <i className="mdi-action-dashboard"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/timesheet" className="cyan-text">
                  <i className="material-icons">access_time</i>
                  <span>Timesheet</span>
                </a>
              </li>
              <li>
                <a href="/task" className="cyan-text">
                  <i className="material-icons">assignment</i>
                  <span>Task</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
