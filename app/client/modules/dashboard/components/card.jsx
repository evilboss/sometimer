import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.menu.map(menu => (
          <div className="col s12 m3 l3" key={menu._id}>
            <a href="#" className="white-text">
            <div className="card-panel cyan white-text">
                <div className="card-icon left">
                  <i className="material-icons"> {menu.icon}</i>
                </div>
                <div className="details">
                  <div className="title">
                    {menu.title}
                  </div>
                </div>
            </div>
            </a>
          </div>
        ))}

      </div>
    );
  }
}

export default Card;
