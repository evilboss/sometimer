/**
 * Created by aaron on 10/28/16.
 */
const _getFileFromInput = (event) => event.target.files[0];

const _setPlaceholderText = (string = "Click to Upload") => {
  'uploading';
};

const _addUrlToDatabase = (url, type) => {
  Meteor.call(type, url, (error) => {
    if (error) {
      Bert.alert({
        type: 'danger',
        style: 'growl-bottom-right',
        title: 'Game Added',
        message: 'Photo Not uploaded',
        icon: 'fa-picture-o'
      });
    } else {
      Bert.alert({
        type: 'success',
        style: 'growl-bottom-right',
        title: 'Game Added',
        message: 'Please wait photo uploading',
        icon: 'fa-picture-o'
      });
      setInterval(function () {
        window.location.reload()
      }, 3000);

      // window.location.reload();
    }
  });
};

const _uploadFileToAmazon = (file, type) => {
  const uploader = new Slingshot.Upload("uploadToAmazonS3");
  uploader.send(file, (error, url) => {
    if (error) {
      Bert.alert(error.message, "warning");
      _setPlaceholderText();
    } else {
      _addUrlToDatabase(url, type);
    }
  });
};

const upload = (options, type) => {
  //template = options.template;
  let file = (options.event) ? _getFileFromInput(options.event) : options.file;
  console.log(file);
  // _setPlaceholderText(`Uploading ${file.name}...`);
  _uploadFileToAmazon(file, type);
};
const uploadToAmazonS3 = {upload: upload};
export {uploadToAmazonS3};
