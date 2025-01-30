import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ToastComponent extends Component {
  @service toast;

  get message() {
    return this.toast.message;
  }
  @action
  remove() {
    this.toast.remove();
  }
}
