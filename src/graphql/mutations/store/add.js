import {GraphQLNonNull} from 'graphql'

import {StoreType, StoreInputType} from '../../types/store';
import Store from '../../../models/store';

export default {
    type:StoreType,
    args:{
        data:{
            type: new GraphQLNonNull(StoreInputType)
        }
    },
    resolve(root,params){
        const store = new Store(params.data);
        const newStore = store.save();
        if (!newStore) throw Error("Error al crear la tienda");
        return newStore;
    }
}