/**
 * Created by jr on 6/20/16.
 */
import Timelogs from '/lib/collections/timelogs';
const logTimeIn = ()=>{
  Timelogs.insert({timeIn:Date.now,status:'In'})
};
const logTimeOut = ()=>{
  let currentLog = Timelogs.findOne({status:'In'});
  console.log(currentLog);

};
const dtr  ={
  logTimeIn:()=>logTimeIn(),
  logTimeOut:()=>logTimeOut()
};
export {dtr};