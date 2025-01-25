import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
  // namespace = 'api';
  // buildURL(...args) {
  //   return `${super.buildURL(...args)}.json`;
  // }

  // pathForType(modelName) {
  //   if (modelName === 'team') {
  //     return 'teams';
  //   }
  //   if (modelName === 'member') {
  //     return 'members';
  //   }
  //   return super.pathForType(...arguments);
  // }
}
