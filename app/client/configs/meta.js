var title = "Remotiv-platform";
DocHead.setTitle(title);
/*meta data*/
var metaInfo = [
  {name: "description", content: "Remotiv Platform"},
  {name: "viewport", content: "user-scalable=no, initial-scale=1, minimal-ui, maximum-scale=1, minimum-scale=1"}
];
_.each(metaInfo, function (metaItem) {
  DocHead.addMeta(metaItem);
});
/*head links*/
var linkInfo = [
  {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
  {rel: "icon", type: "image/png", href: "Assets/teams/default/logo/remotiv_io_logo_style3.png"}];
_.each(linkInfo, function (linkInfo) {
  DocHead.addLink(linkInfo);
});


