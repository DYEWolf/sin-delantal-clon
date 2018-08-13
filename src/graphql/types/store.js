import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList, GraphQLInt} from 'graphql';

import {TypeRestType} from './type_rest';
import {ProductType} from './products';

import TypeRestaurant from '../../models/type_rest';
import Product from '../../models/products';

export const DirectionType = new GraphQLObjectType({
    name: 'Direction',
    description: 'Directions from user',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
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
            type: GraphQLString
        }
    })
});

export const RatingType = new GraphQLObjectType({
    name: 'Rating',
    description: 'Rating array',
    fields: () => ({
        comments: {
            type: GraphQLString
        },
        stars: {
            type: GraphQLInt
        }
    })
});

export const StoreType = new GraphQLObjectType({
    name: 'Store',
    description: 'different types of restaurants',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        directions: {
            type: new GraphQLList(DirectionType)
        },
        name: {
            type: GraphQLString
        },
        mail: {
            type: GraphQLString
        },
        tel: {
            type: GraphQLString
        },
        type_rest: {
            type: TypeRestType,
            resolve(property){
                const {typeRestaurant} = property;
                return TypeRestaurant.findById(typeRestaurant).exec();
            }
        },
        rating: {
            type: new GraphQLList(RatingType)
        },
        open_restaurant: {
            type: GraphQLString
        },
        close_restaurant: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        logo: {
            type: GraphQLString
        },
        price: {
            type: GraphQLInt
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(property){
                const {product} = property;
                return Product.find({_id:{$in:product}}).exec();
            }
        },
    })
});