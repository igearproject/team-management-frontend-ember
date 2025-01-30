import ApplicationAdapter from './application';

export default class TeamAdapter extends ApplicationAdapter {
  urlForFindRecord(id, modelName, snapshot) {
    const baseUrl = super.urlForFindRecord(id, modelName, snapshot);
    const filter = {
      include: [
        {
          relation: 'members',
        },
      ],
    };
    const filterString = encodeURIComponent(JSON.stringify(filter));
    return `${baseUrl}?filter=${filterString}`;
  }
}
