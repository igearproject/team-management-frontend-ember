import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DeleteTeamComponent extends Component {
  @service store;
  @service router;
  @service toast;
  @tracked isLoading = false;
  @tracked message = null;
  @tracked idTeam;
  constructor() {
    super(...arguments);
    this.idTeam = this.team.id;
  }
  get team() {
    return this.args.team;
  }
  @action
  async deleteTeam(id) {
    this.isLoading = true;
    this.message = null;
    try {
      let team = await this.store.peekRecord('team', id);
      // let team = await this.store.peekRecord('team', this.idTeam);
      await team.destroyRecord({ adapterOptions: { includeMembers: false } });
      // this.name = '';
      // this.description = '';
      // this.message = {
      //   message: 'Delete team successfully',
      //   status: 'success',
      // };
      this.toast.show('Delete team successfully', 'success', 10000);
      this.router.transitionTo('team');
    } catch (error) {
      this.message = {
        message: error.message,
        status: 'danger',
      };
      console.log('error delete team >>', error);
    } finally {
      this.isLoading = false;
    }
  }
}
