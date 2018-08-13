import {GraphQLNonNull,GraphQLID} from 'graphql';

import {StoreType} from '../../types/store';

import Store from '../../../models/store';

const querySingleStore = {
    type:StoreType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const store = Store.findById(params.id).exec()
        return store
    }
}

export default querySingleStore;