import Model, { attr, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @hasMany('member', { async: true, inverse: 'team' }) members;
}
