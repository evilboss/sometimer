Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: process.env.PWD + "/public/uploads/"})]
});
console.log(process.env.PWD);
if (Meteor.isServer) {
  Images.allow({
    'insert': function () {
      // add custom authentication code here
      return true;
    },
    'update': function () {
      // add custom authentication code here
      return true;
    },
    'remove': function () {
      // add custom authentication code here
      return true;
    },
    download: function (userId, fileObj) {
      return true
    }
  });
}

export default Images;
