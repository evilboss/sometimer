import React from 'react';
import ReactDOM from 'react-dom';
import TileView from './tile_view';
import ListView from './list_view';


class ViewProjects extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <section id="project-list">

        <div><h5>ProjectList <span>
          <a href="/projects/new" className="btn-floating waves-effect waves-light theme-color">
            <i className="material-icons">add</i></a></span></h5>
        </div>

        <TileView projects={this.props.projects}/>

      </section>
    );
  }

}

export default ViewProjects;