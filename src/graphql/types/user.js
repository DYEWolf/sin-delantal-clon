import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';

export const DirectionType = new GraphQLObjectType({
    name: 'Directions',
    description: 'Directions from user',
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        street:{
            type: GraphQLString
        },
        num_int: {
            type: GraphQLInt
        },
        num_ext: {
            type: GraphQLInt
        },
        zip: {
            type: GraphQLInt
        }
    })
});

export const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Users from database',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        mail: {
            type: GraphQLString
        },
        birthdate: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        photo: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
        directions: {
            type: new GraphQLList(DirectionType)
        }
    })
});