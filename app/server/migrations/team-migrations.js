/**
 * Created by jr on 6/8/16.
 */
import {Team} from '/lib/collections';

export function loadTeams() {
  console.log('Loading Teams');
  if (Team.find({}).count() === 0) {
    Team.insert({name:'protos'});
    Team.insert({name:'ezyva'});
  }
}
export function removeAllTeams() {
  console.log('Removing Teams');
  return Team.remove({});

}
