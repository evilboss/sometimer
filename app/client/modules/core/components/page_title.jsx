import React from 'react';

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-title">
        <h5 className="inline">{this.props.title}</h5>
      </div>
    );
  }
}

export default PageTitle;
