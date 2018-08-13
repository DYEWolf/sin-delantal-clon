import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID} from 'graphql';

export const CuponType = new GraphQLObjectType({
    name: 'Cupon',
    description: 'Cupons from restaurants',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        cupon: {
            type: GraphQLString
        }
    })
});