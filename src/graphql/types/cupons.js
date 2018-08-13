import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLInputObjectType} from 'graphql';

export const CuponType = new GraphQLObjectType({
    name: 'Cupon',
    description: 'Cupons from restaurants',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        cupon: {
            type: GraphQLString
        },
        discount: {
            type: GraphQLInt
        },
        description: {
            type: GraphQLString
        },
    })
});

export const CuponInputType = new GraphQLInputObjectType({
    name: 'addCupon',
    description: 'add cupon',
    fields: () => ({
        cupon: {
            type: GraphQLString
        },
        discount: {
            type: GraphQLInt
        },
        description: {
            type: GraphQLString
        },
    })
});