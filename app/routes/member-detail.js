import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { gt } from 'ember-truth-helpers';

export default class MemberDetailRoute extends Route {
  @service store;
  @service member;
  @tracked isLoading = false;
  @tracked message = null;
  gt = gt;
  async model(params) {
    this.isLoading = true;
    try {
      const member = await this.member.getOneMember(parseInt(params.id_member));
      return member;
    } catch (error) {
      this.message = {
        message: error.message,
        status: 'danger',
      };
      console.log(this.message);
      console.log('error getting one member >>', error);
    } finally {
      console.log(this.message);
      this.isLoading = false;
    }
  }
}
