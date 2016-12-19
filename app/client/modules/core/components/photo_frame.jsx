import React from 'react';
import AvatarEditor from "/client/modules/core/components/avatar_editor";

class PhotoFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      image: ''

    }
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

  toggleUpload() {
    this.setState({isUploading: !this.state.isUploading});
  }

  render() {
    let {displayPhoto} = this.props;
    let {isUploading, image} = this.state;
    return (
      <div>
        {(isUploading) ?
          <div>
            <AvatarEditor
              image={image}
            />
            <button onClick={this.toggleUpload.bind(this)}>Cancel</button>
          </div> :
          <div className="avatar-photo">
            <input ref="photo" type="file" accept="image/*" onChange={this.onFileChange.bind(this)}/>
            <div className="avatar-edit">
              <span>Click to Pick Avatar</span>
              <i className="fa fa-camera"></i></div>
            <img src={displayPhoto}/>
          </div>
        }


      </div>

    );
  }
}


export default PhotoFrame;
