import RESTSerializer from '@ember-data/serializer/json-api';

export default class TeamSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Normalize the team data
    const normalizedPayload = {
      data: payload.map((team) => ({
        id: `${team.id}`,
        type: 'team',
        attributes: {
          name: team.name,
          description: team.description,
        },
        relationships: {
          members: {
            data: team.members
              ? team.members.map((member) => ({
                  id: `${member.id}`,
                  type: 'member',
                }))
              : [],
          },
        },
      })),
      included: payload.flatMap((team) =>
        team.members
          ? team.members.map((member) => ({
              id: `${member.id}`,
              type: 'member',
              attributes: {
                name: member.name,
                role: member.role,
                teamId: `${member.teamId}`,
              },
            }))
          : [],
      ),
    };

    // Pass the normalized data back
    return super.normalizeResponse(
      store,
      primaryModelClass,
      normalizedPayload,
      id,
      requestType,
    );
  }
}
