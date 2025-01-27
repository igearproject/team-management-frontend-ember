import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { eq, not } from 'ember-truth-helpers';

export default class CreateTeamComponent extends Component {
  @service store;
  @tracked name = '';
  @tracked description = '';
  @tracked isLoading = false;
  @tracked message = null;

  not = not;
  eq = eq;

  @action
  async createTeam(event) {
    event.preventDefault();
    this.isLoading = true;
    this.message = null;
    try {
      const newTeam = this.store.createRecord('team', {
        name: this.name,
        description: this.description,
      });
      // console.log('Team before save:', newTeam);

      // Save the record and log the result
      await newTeam.save();

      // console.log('New Team Created:', newTeam);
      // console.log('newTeam ', newTeam);
      this.name = '';
      this.description = '';
      this.message = {
        message: 'Add new team successfully',
        status: 'success',
      };
    } catch (error) {
      this.message = {
        message: error.message,
        status: 'error',
      };
      console.log('error create team >>', error);
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
