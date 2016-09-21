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
PageTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
}
PageTitle.defaultProps = {
  title: 'No title'
}

export default PageTitle;
