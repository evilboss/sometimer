/**
 * Created by jr on 8/24/16.
 */
const getRandomInt = (min, max)=> {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export{
  getRandomInt
}
