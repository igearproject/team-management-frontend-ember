import Component from '@glimmer/component';

export default class MessageComponent extends Component {
  constructor() {
    super(...arguments);
  }
  get message() {
    return this.args.message;
  }
}
