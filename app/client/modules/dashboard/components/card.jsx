import React from 'react';
import {sweetPrompts} from '/client/utils/helpers/sweet-helper';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.menu.map(menu => (
          <div className="col s12 m6 l3" key={menu._id}>
            <a href={menu.url} className="white-text"
               onClick={(menu.title =='WORK FLOW'||menu.title =='TOOLBOX')? sweetPrompts.sweetOkPrompt.bind(this,'Coming Soon!'):''}>
              <div className="card-panel theme-color white-text">
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
