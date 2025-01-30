import EmberRouter from '@ember/routing/router';
import config from 'frontend-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('team');
  this.route('team-add', { path: '/team/add' });
  this.route('team-edit', { path: '/team/:id_team/edit' });
  this.route('team-delete', { path: '/team/:id_team/delete' });
  this.route('team-detail', { path: '/team/:id_team' });
  this.route('member');
  this.route('member-add', { path: '/team/:id_team/member/add' });
  this.route('member-detail', { path: '/team/:id_team/member/:id_member' });
});
