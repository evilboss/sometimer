/**
 * Created by aaron on 10/27/16.
 */
Meteor.startup(() => {
  BrowserPolicy.content.allowFontDataUrl();
  BrowserPolicy.content.allowOriginForAll('*');
});