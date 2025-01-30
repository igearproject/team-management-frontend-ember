import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { eq } from 'ember-truth-helpers';
import { inject as service } from '@ember/service';

export default class FormMember extends Component {
  @service member;
  @service router;
  @tracked name;
  @tracked role;
  @tracked idTeam;
  @tracked isLoading;
  eq = eq;
  constructor() {
    super(...arguments);
    if (this.dataMember) {
      this.name = this.dataMember.name;
      this.role = this.dataMember.role;
    }
  }
  get team() {
    return this.args.team;
  }
  get for() {
    return this.args.for;
  }
  get dataMember() {
    return this.args.dataMember;
  }
  @action
  setNull() {
    this.name = '';
    this.role = '';
  }
  @action
  setName(event) {
    this.name = event.target.value;
    console.log(this.name);
  }
  @action
  setRole(event) {
    this.role = event.target.value;
    console.log(this.role);
  }
  @action
  setIdTeam(event) {
    this.idTeam = event.target.value;
    console.log(this.idTeam);
  }
  @action
  async handleSubmit(event) {
    event.preventDefault();
    if (!this.idTeam) {
      this.idTeam = event.target.idTeam.value;
      console.log(this.idTeam);
    }
    console.log('submit form add member team');
    if (this.for === 'add') {
      console.log('add');
      try {
        await this.member.addMember(
          this.name,
          parseInt(this.idTeam),
          this.role,
        );
        this.setNull();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log('update');
      try {
        await this.member.editMember(
          this.dataMember.id,
          this.name,
          parseInt(this.idTeam),
          this.role,
        );
        // this.setNull();
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  @action
  async deleteMember() {
    console.log('delete');
    let isConfirmed = window.confirm(
      `Are you sure you want to delete ${this.dataMember.name}?`,
    );
    if (isConfirmed) {
      try {
        await this.member.deleteMember(this.dataMember.id);
        this.setNull();
        this.router.transitionTo('team-detail', this.team.id);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}
