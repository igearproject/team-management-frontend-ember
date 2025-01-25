import { service } from '@ember/service';
import Route from '@ember/routing/route';
import { gt } from 'ember-truth-helpers';

export default class TeamRoute extends Route {
  gt = gt;
  @service store;
  async model(params) {
    const filter = {
      filter: {
        offset: params.offset || 0,
        limit: params.limit || 10,
        order: params.order || 'name',
        skip: 0,
        fields: {
          id: true,
          name: true,
          description: true,
        },
        include: [
          {
            relation: 'members',
          },
        ],
      },
    };
    return await this.store.query('team', filter);
  }
}
