import React from "react";
import ReactAvatarEditor from "react-avatar-editor";
import {uploadToAmazonS3} from "/client/utils/helpers/file_upload";
class AvatarEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
      borderRadius: 0,
      preview: null,
      isUploading: false,
      image: ''

    }

    this.handleSave = this.handleSave.bind(this);
    this.handleScale = this.handleScale.bind(this);
    this.handleBorderRadius = this.handleBorderRadius.bind(this);
  }

  dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
  }

  toggleUpload() {
    this.setState({isUploading: !this.state.isUploading});
  }

  onFileChange() {
    const {
      photo
    }= this.refs;
    const reader = new FileReader();
    reader.readAsDataURL(photo.files[0]);
    reader.onloadend = (event) => {
      var img = photo.files[0];
      img.src = event.target.result;
      this.setState({image: img.src});
    }
    this.toggleUpload();
  }

  handleSave(data) {
    var img = this.refs.avatar.getImage().toDataURL();
    var rect = this.refs.avatar.getCroppingRect();
    let file = this.dataURItoBlob(img);
    //this.setState({preview: img, croppingRect: rect});
    uploadToAmazonS3.upload({file: file}, "updateDisplayPhoto");
    this.toggleUpload();

  }

  handleScale() {
    var scale = parseFloat(this.refs.scale.value);
    this.setState({scale: scale})
  }

  handleBorderRadius() {
    var borderRadius = parseInt(this.refs.borderRadius.value);
    this.setState({borderRadius: borderRadius})
  }

  logCallback(e) {
    console.log("callback", e);
  }

  render() {
    let {displayPhoto} = this.props;
    let {isUploading, image} = this.state;
    return (

      <div>
        <div>
          {(isUploading) ?
            <div>
              <div className="avatar-edit">
                <ReactAvatarEditor
                  ref="avatar"
                  scale={parseFloat(this.state.scale)}
                  borderRadius={this.state.borderRadius}
                  onSave={this.handleSave}
                  onLoadFailure={this.logCallback.bind(this, 'onLoadFailed')}
                  onLoadSuccess={this.logCallback.bind(this, 'onLoadSuccess')}
                  onImageReady={this.logCallback.bind(this, 'onImageReady')}
                  onImageLoad={this.logCallback.bind(this, 'onImageLoad')}
                  onDropFile={this.logCallback.bind(this, 'onDropFile')}
                  image={image}
                />
                <br/>
                Zoom:
                <input name="scale" type="range" ref="scale" onChange={this.handleScale} min="1" max="2" step="0.01"
                       defaultValue="1"/>
                <br/>
                <br/>
                <input type="button" className="btn theme-color" onClick={this.handleSave} value="Save"/>
                <br />
                <img src={this.state.preview}/></div>
              <button onClick={this.toggleUpload.bind(this)}>Cancel</button>
            </div> :
            <div className="avatar-photo valign-wrapper">
              <input ref="photo" type="file" accept="image/*" onChange={this.onFileChange.bind(this)}/>
              <div className="avatar-edit">
                <span>Click to Pick Avatar</span>
                <i className="fa fa-camera"></i></div>
              <img className="valign" src={displayPhoto}/>
            </div>
          }


        </div>


      </div>
    )
  }
}

// Used to display the cropping rect
class ImageWithRect extends React.Component {
  componentDidMount() {
    this.redraw();
  }

  componentDidUpdate() {
    this.redraw();
  }

  redraw() {
    var img = new Image();

    img.onload = function (ctx, rect, width, height) {
      ctx.drawImage(img, 0, 0, width, height);

      if (rect) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(
          Math.round(rect.x * width) + 0.5,
          Math.round(rect.y * height) + 0.5,
          Math.round(rect.width * width),
          Math.round(rect.height * height)
        );
      }
    }.bind(this, this.refs.root.getContext('2d'), this.props.rect, this.props.width, this.props.height);

    img.src = this.props.image;
  }

  render() {
    return <canvas
      ref="root"
      style={this.props.style}
      width={this.props.width}
      height={this.props.height}/>;
  }
}

export default AvatarEditor;
