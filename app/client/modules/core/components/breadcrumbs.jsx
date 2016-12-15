import React from 'react';
class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {crumbs, FlowHelpers} = this.props;
    console.log(crumbs);
    return (
      <section id="breadcrumbs">
        {crumbs.map((crumb, index) => (
          (crumb.path) ? <a key={index} href={(FlowHelpers) ? FlowHelpers.pathFor(crumb.path, crumb.params) : ''}
                            className={(index >= (crumbs.length - 1)) ? 'active' : 'collection-item'}>
            {console.log(_.first(crumbs), 'first')}
            <b>{(index > 0) ? (index == 1) ? (_.first(crumbs)) ? ' > ' : '' : ' > ' : ''}{crumb.text}</b>
          </a> : ''
        ))}
      </section>

    );
  }
}
Breadcrumbs.propTypes = {
  crumbs: React.PropTypes.array.isRequired,
}
Breadcrumbs.defaultProps = {
  FlowHelpers: {
    pathFor: (path, params) => {
      return ``
    }
  },
  crumbs: [{text: 'Home', path: 'home', params: ''}, {text: 'Home', path: 'home', params: ''}, {
    text: 'Home',
    path: 'home',
    params: ''
  }]
};
export default Breadcrumbs;
