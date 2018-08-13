import {GraphQLNonNull} from 'graphql'

import {OrderType, OrderInputType} from '../../types/order';
import Order from '../../../models/order';

export default {
    type:OrderType,
    args:{
        data:{
            type: new GraphQLNonNull(OrderInputType)
        }
    },
    resolve(root,params){
        const order = new Order(params.data);
        const newOrder = order.save();
        if (!newOrder) throw Error("Error al crear la orden");
        return newOrder;
    }
}