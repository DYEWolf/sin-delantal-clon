import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLInputObjectType} from 'graphql';

import {StoreType} from './store';

import Store from '../../models/store';

export const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: 'Products from the store',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        price: {
            type: GraphQLInt
        },
        photo: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        stores: {
            type: StoreType,
            resolve(property){
                const {store} = property;
                return Store.findById(store).exec();
            }
        },
        type: {
            type: GraphQLInt
        }
    })
});

export const ProductInputType = new GraphQLInputObjectType({
    name: 'addProduct',
    description: 'add product',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        price: {
            type: GraphQLInt
        },
        photo: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        stores: {
            type: GraphQLNonNull(GraphQLID)
        },
        type: {
            type: GraphQLInt
        }
    })
});