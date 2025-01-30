import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ToastService extends Service {
  @tracked message;

  show(message, type = 'info', duration = 3000) {
    this.message = { message, type };
    setTimeout(() => {
      this.remove();
    }, duration);
  }

  remove() {
    this.message = null;
  }
}
