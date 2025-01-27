import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TeamEditRoute extends Route {
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
        status: 'error',
      };
      console.log('error getting one team >>', error);
    } finally {
      this.isLoading = false;
    }
  }
}
