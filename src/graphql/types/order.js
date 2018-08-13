import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLInputObjectType} from 'graphql';

import {ProductType} from './products';
import {CuponType} from './cupons'
import {UserType} from './user';
import {StoreType} from './store';

import Product from '../../models/products';
import Cupon from '../../models/cupons';
import User from '../../models/user';
import Store from '../../models/store';

export const OrderType = new GraphQLObjectType({
    name: 'Order',
    description: 'final order',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(property){
                const {product} = property;
                return Product.find({_id:{$in:product}}).exec();
            }
        },
        amount: {
            type: GraphQLInt
        },
        cupon: {
            type: CuponType,
            resolve(property){
                const {cupon} = property;
                return Cupon.findById(cupon).exec();
            }
        },
        status: {
            type: GraphQLString
        },
        payment_status: {
            type: GraphQLBoolean
        },
        user_direction: {
            type: GraphQLString
        },
        user: {
            type: UserType,
            resolve(property){
                const {user} = property;
                return User.findById(user).exec();
            }
        },
        store: {
            type: StoreType,
            resolve(property){
                const {store} = property;
                return Store.findById(store).exec();
            }
        }
    })
});

export const OrderInputType = new GraphQLInputObjectType({
    name: 'addOrder',
    description: 'add order',
    fields: () => ({
        products: {
            type: new GraphQLList(GraphQLID)
        },
        amount: {
            type: GraphQLInt
        },
        cupon: {
            type: GraphQLID
        },
        status: {
            type: GraphQLString
        },
        payment_status: {
            type: GraphQLBoolean
        },
        user_direction: {
            type: GraphQLString
        },
        user: {
            type:GraphQLNonNull(GraphQLID)
        },
        store: {
            type: GraphQLNonNull(GraphQLID)
        }
    })
});