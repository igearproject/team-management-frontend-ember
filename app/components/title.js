import Component from '@glimmer/component';

export default class TitleComponent extends Component {
  get title() {
    return this.args.title;
  }
}
