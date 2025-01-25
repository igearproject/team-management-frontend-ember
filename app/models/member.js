import Model, { attr, belongsTo } from '@ember-data/model';

export default class MemberModel extends Model {
  @attr('string') name;
  @attr('string') role;
  // @attr('number') teamId;
  @belongsTo('team', { async: true, inverse: 'members' }) team;
}
