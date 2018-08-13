import {GraphQLNonNull, GraphQLID} from 'graphql'

import {StoreType} from '../../types/store';
import Store from '../../../models/store';

export default {
    type: StoreType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteStore = Store.findByIdAndRemove(params.id).exec()
        if (!deleteStore) throw Error("Error al borrar la tienda");
        return deleteStore;
    }
}