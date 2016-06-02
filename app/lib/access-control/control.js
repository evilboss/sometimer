/**
 * Created by jr on 6/2/16.
 */
const control = {
  public: {
    uploadFolderPath: "~/uploads",
    routes: [
      {name: "dashboard"},
      {name: 'staff.inOutBoard'}
    ],
  },
  private: {
    MAIL_URL: "smtp://localhost:1025"
  }
}

export {
  control
}