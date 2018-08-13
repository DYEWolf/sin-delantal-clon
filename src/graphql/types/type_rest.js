import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInputObjectType} from 'graphql';

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

export const TypeRestInputType = new GraphQLInputObjectType({
    name: 'addTypeRest',
    description: 'add Type Rest',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        }
    })
});