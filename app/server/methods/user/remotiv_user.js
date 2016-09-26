/**
 * Created by jr on 9/26/16.
 */
const add = (newUser)=> {
  console.log(newUser)
};
const remotivUser = {
  add: (newUser)=>add(newUser)
}
export {remotivUser};