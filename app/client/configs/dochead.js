var title = "Remotiv-platform";
DocHead.setTitle(title);
var metaInfo = [
  {name: "description", content: "Remotiv Platform"},
  {name: "viewport", content: "user-scalable=no, initial-scale=1, minimal-ui, maximum-scale=1, minimum-scale=1"}

];
_.each(metaInfo, function (metaItem) {
  DocHead.addMeta(metaItem);
});