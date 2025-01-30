import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MembersController extends Controller {
  @service store;
  @service toast;

  @action
  async fetchMembers() {
    try {
      const members = await this.store.findAll('member');
      return members;
    } catch (error) {
      console.error(error);
    }
  }

  // Tambah member baru
  @action
  async addMember(name, teamId, role) {
    try {
      const newMember = this.store.createRecord('member', {
        name: name,
        teamId: teamId,
        role: role,
      });
      await newMember.save();
      this.toast.show('Add member successfully', 'success');
      this.fetchMembers(); // Refresh data
    } catch (error) {
      this.toast.show('Add member failed :', error.message, 'success');
      console.error(error);
    }
  }

  // // Edit member
  // @action
  // async editMember(member) {
  //   try {
  //     await member.save(); // Simpan perubahan ke API
  //     this.fetchMembers(); // Refresh data
  //   } catch (error) {
  //     this.set('errorMessage', 'Gagal mengedit member.');
  //     console.error(error);
  //   }
  // }

  // // Hapus member
  // @action
  // async deleteMember(member) {
  //   try {
  //     await member.destroyRecord(); // Hapus dari API
  //     this.fetchMembers(); // Refresh data
  //   } catch (error) {
  //     this.set('errorMessage', 'Gagal menghapus member.');
  //     console.error(error);
  //   }
  // }
}
