import EmberRouter from '@ember/routing/router';
import config from 'frontend-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('team');
  this.route('team-add', { path: '/team/add' });
  this.route('member');
});
