/**
 * Created by jr on 8/26/16.
 */
import {Settings} from '/lib/collections';
Migrations.add({
  version: 10,
  name: 'Add Default settings to remotiv',
  up: function () {
    loadSettings();
  },
  down: function () {
    removeSettings();
  }
});

const loadSettings = ()=> {
  console.info('Loading Settings');
  Settings.insert({url: '/Assets/teams/default/logo/remotiv_io_logo_style3.png'})

};
const removeSettings = ()=> {
  const settings = Settings.findOne();
  Settings.remove(settings._id);
};
