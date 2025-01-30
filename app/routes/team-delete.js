import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TeamDeleteRoute extends Route {
  @service store;
  @tracked isLoading = false;
  @tracked message = null;
  async model(params) {
    this.isLoading = true;
    try {
      return await this.store.findRecord('team', params.id_team);
    } catch (error) {
      this.message = {
        message: error.message,
        status: 'danger',
      };
      console.log(this.message);
      console.log('error getting one team >>', error);
    } finally {
      console.log(this.message);
      this.isLoading = false;
    }
  }

  @action
  transitionFromComponent(routeName, model) {
    if (model) {
      this.route.transitionTo(routeName, model);
    } else {
      this.route.transitionTo(routeName);
    }
  }
}
