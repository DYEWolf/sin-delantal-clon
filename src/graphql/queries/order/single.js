import {GraphQLNonNull,GraphQLID} from 'graphql';

import {OrderType} from '../../types/order';

import Order from '../../../models/order';

const querySingleOrder = {
    type:OrderType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const order = Order.findById(params.id).exec()
        return order
    }
}

export default querySingleOrder;