import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class MemberService extends Service {
  @service store;
  @service toast;
  baseUrl;
  constructor() {
    super(...arguments);
    this.getHost();
  }
  getHost() {
    let adapter = this.store.adapterFor('application');
    this.baseUrl = adapter.host;
  }
  @action
  async fetchMembers() {
    try {
      const members = await this.store.findAll('member');
      return members;
    } catch (error) {
      console.error(error);
    }
  }

  @action
  async getOneMember(id) {
    try {
      console.log(this.baseUrl, '/members');
      let response = await fetch(
        this.baseUrl +
          '/members/' +
          id +
          '?filter=%7B%0A%20%20%22include%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22relation%22%3A%20%22team%22%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      );

      const member = await response.json();
      return member;
    } catch (error) {
      this.toast.show('Add member failed :' + error.message, 'danger');
      console.error(error);
    }
  }

  // Tambah member baru
  @action
  async addMember(name, teamId, role) {
    try {
      console.log(this.baseUrl, '/members');
      const response = await fetch(this.baseUrl + '/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          teamId: teamId,
          role: role,
        }),
      });

      const newMember = await response.json();
      this.toast.show('Add member successfully', 'success', 10000);
      return newMember;
    } catch (error) {
      this.toast.show('Add member failed :' + error.message, 'danger');
      console.error(error);
    }
  }

  // // Edit member
  @action
  async editMember(id, name, teamId, role) {
    try {
      console.log(this.baseUrl + '/members/' + id);
      await fetch(this.baseUrl + '/members/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          teamId: teamId,
          role: role,
        }),
      });
      this.toast.show('Edit member successfully', 'success', 10000);
    } catch (error) {
      this.toast.show('Edit member failed :' + error.message, 'danger', 10000);
      console.error(error);
    }
  }

  // // Hapus member
  @action
  async deleteMember(id) {
    try {
      console.log(this.baseUrl + '/members/' + id);
      await fetch(this.baseUrl + '/members/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      this.toast.show('Delete member successfully', 'success', 10000);
    } catch (error) {
      this.toast.show(
        'Delete member failed :' + error.message,
        'danger',
        10000,
      );
      console.error(error);
    }
  }
}
