/**
 * Created by jr on 10/21/16.
 */
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const capsAll = (string) => {
  return string.toUpperCase();
};

const formatHelper = {
  capitalize: capitalize,
  capsAll: capsAll
};
export {formatHelper}
