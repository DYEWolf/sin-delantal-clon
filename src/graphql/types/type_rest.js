import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} from 'graphql';

export const TypeRestType = new GraphQLObjectType({
    name: 'TypeRest',
    description: 'Type of the restaurants',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        }
    })
});