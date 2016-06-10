import React from 'react';

class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="hide-on-med-and-down">
        <li>
          <a href="/dashboard" className="cyan-text">
            <i className="mdi-action-dashboard"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/dashboard" className="cyan-text">
            <i className="mdi-action-dashboard"></i>
            <span>Dashboard</span>
          </a>
        </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li><li>
        <a href="/dashboard" className="cyan-text">
          <i className="mdi-action-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li>
        {this.props.menu.map(menu => (
          <li key={menu._id}>
            <a href={menu.url} className="cyan-text">
              <i className="material-icons">{menu.icon}</i>
              <span>{menu.title}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavbarItem;
