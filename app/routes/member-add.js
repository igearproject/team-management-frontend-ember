import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { gt } from 'ember-truth-helpers';

export default class MemberAddRoute extends Route {
  @service store;
  @tracked isLoading = false;
  @tracked message = null;
  gt = gt;
  async model(params) {
    this.isLoading = true;
    try {
      const team = await this.store.findRecord(
        'team',
        parseInt(params.id_team),
      );
      return team;
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
}
