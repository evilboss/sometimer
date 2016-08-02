import React from 'react';

var TileView = React.createClass({
  
  render() {
    return (
      <div className="row">
        <div className="project-view">
          <i className="material-icons active">view_module</i>
          <a href="/projects/listview"><i className="material-icons">view_list</i></a>
        </div>
        {this.props.projects.map(project=> (
          <a href="#!" key={project._id} className="collection-item">
            <article className="col s12 m6 l4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">{project.name}</span>
                  <p className="subtext">{project.description}</p>
                </div>
                <div className="card-action">
                  <img src="/uploads/images-JDmnjLyS2SJX2Dobw-10157144_1564499200529805_9058151315234506598_n.jpg"
                       alt="people" className="circle responsive-img"/>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    );
  }
});

export default TileView;
