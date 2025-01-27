import RESTSerializer from '@ember-data/serializer/json-api';

export default class TeamSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log('payload', payload);
    // if (!Array.isArray(payload)) {
    //   payload = [payload];
    // }
    // console.log('payload', payload);

    // Normalize the team data
    let normalizedPayload;
    if (Array.isArray(payload)) {
      normalizedPayload = {
        data: payload.map((team) => ({
          id: `${team.id || null}`,
          type: 'team',
          attributes: {
            name: team.name,
            description: team.description,
          },
          relationships: {
            members: {
              data: team.members
                ? team.members.map((member) => ({
                    id: `${member.id || null}`,
                    type: 'member',
                  }))
                : [],
            },
          },
        })),
        included: payload.flatMap((team) =>
          team.members
            ? team.members.map((member) => ({
                id: `${member.id || null}`,
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
    } else {
      normalizedPayload = {
        data: {
          id: `${payload.id || null}`,
          type: 'team',
          attributes: {
            name: payload.name,
            description: payload.description,
          },
          relationships: {
            members: {
              data: payload.members
                ? payload.members.map((member) => ({
                    id: `${member.id || null}`,
                    type: 'member',
                  }))
                : [],
            },
          },
        },
        included: payload.members
          ? payload.members.map((member) => ({
              id: `${member.id || null}`,
              type: 'member',
              attributes: {
                name: member.name,
                role: member.role,
                teamId: `${member.teamId}`,
              },
            }))
          : [],
      };
    }

    // Pass the normalized data back
    return super.normalizeResponse(
      store,
      primaryModelClass,
      normalizedPayload,
      id,
      requestType,
    );
  }

  serialize(snapshot, options) {
    let json = {
      name: snapshot.attr('name'),
      description: snapshot.attr('description'),
    };

    if (options && options.includeMembers && snapshot.hasMany('members')) {
      json.members = snapshot.hasMany('members').map((memberSnapshot) => ({
        id: memberSnapshot.id,
        name: memberSnapshot.attr('name'),
        role: memberSnapshot.attr('role'),
        teamId: memberSnapshot.attr('teamId'),
      }));
    }

    return json;
  }
}
