/**
 * Created by jr on 6/8/16.
 */
import {TeamInfo} from '/client/modules/team/libs/teamInfo';
let runTeamSearch=()=>{
  Tracker.autorun(function () {
    (TeamInfo.getTeamInfo()) ? FlowRouter.redirect('/login') : FlowRouter.redirect('/notfound');
  });
}
const Oauth = {
  directToTeam: (ctx, redirect, stop)=> {
    (TeamInfo.getTeamDomain())?runTeamSearch():'';

  }
}

export {Oauth};

