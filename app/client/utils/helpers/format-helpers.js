/**
 * Created by jr on 10/21/16.
 */
const capitalize = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);

};

const formatHelper = {
  capitalize: capitalize,
};
export {formatHelper}