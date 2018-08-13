import {GraphQLNonNull, GraphQLID} from 'graphql'

import {OrderType} from '../../types/order';
import Order from '../../../models/order';

export default {
    type: OrderType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteOrder = Order.findByIdAndRemove(params.id).exec()
        if (!deleteOrder) throw Error("Error al borrar la orden");
        return deleteOrder;
    }
}