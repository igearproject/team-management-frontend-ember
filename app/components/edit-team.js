import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { eq, not } from 'ember-truth-helpers';

export default class EditTeamComponent extends Component {
  @service store;
  @tracked name = '';
  @tracked description = '';
  @tracked idTeam = '';
  @tracked isLoading = false;
  @tracked message = null;

  not = not;
  eq = eq;

  constructor() {
    super(...arguments);
    this.name = this.team.name;
    this.description = this.team.description;
    this.idTeam = this.team.id;
  }
  get team() {
    return this.args.team;
  }
  @action
  async editTeam(event) {
    event.preventDefault();
    this.isLoading = true;
    this.message = null;
    try {
      let team = await this.store.findRecord('team', this.idTeam);
      team.name = this.name;
      team.description = this.description;
      await team.save({ adapterOptions: { includeMembers: false } });
      // this.name = '';
      // this.description = '';
      this.message = {
        message: 'Update team successfully',
        status: 'success',
      };
    } catch (error) {
      this.message = {
        message: error.message,
        status: 'danger',
      };
      console.log('error update team >>', error);
    } finally {
      this.isLoading = false;
    }
  }

  @action
  setName(event) {
    this.name = event.target.value;
    // console.log('change name >>', event.target.value);
  }
  @action
  setDescription(event) {
    this.description = event.target.value;
    // console.log('change description >>', event.target.value);
  }
}
