import React from 'react';
import {FlowHelpers} from '/client/utils/helpers/route-helpers'

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {crumbs} = this.props;
    console.log(crumbs);
    return (
      <section id="breadcrumbs">
        {crumbs.map((crumb, index) => (
          <a key={index} href={FlowHelpers.pathFor(crumb.path,crumb.params)}
             className={(index>=(crumbs.length-1))?'active':'collection-item'}>
            <b>{(index > 0) ? ' > ' : ''}{crumb.text}</b>
          </a>
        ))}
      </section>

    );
  }
}
Breadcrumbs.propTypes = {
  crumbs: React.PropTypes.array.isRequired,
}
Breadcrumbs.defaultProps = {
  crumbs: [{text: 'Home', path: 'home', params: ''}, {text: 'Home', path: 'home', params: ''}, {
    text: 'Home',
    path: 'home',
    params: ''
  }]
};
export default Breadcrumbs;
