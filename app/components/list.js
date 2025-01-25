import Component from '@glimmer/component';
import { gt } from 'ember-truth-helpers';

export default class ListComponent extends Component {
  gt = gt;
  get team() {
    return this.args.team;
  }
}
