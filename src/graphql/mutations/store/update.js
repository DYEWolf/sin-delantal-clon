import {GraphQLNonNull, GraphQLID} from 'graphql'

import {StoreType, StoreInputType} from '../../types/store';
import Store from '../../../models/store';

export default {
    type:StoreType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            type: new GraphQLNonNull(StoreInputType)
        }
    },
    resolve(root,params){
        return Store.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
        .then(store => store)
        .catch(erre =>  Error('Error al hacer el update'))
    }
}