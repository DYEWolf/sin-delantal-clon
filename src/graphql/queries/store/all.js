import {GraphQLList} from 'graphql';

import {StoreType} from '../../types/store';

import Store from '../../../models/store';


const queryAllStores = {
    type: new GraphQLList(StoreType),
    resolve() {
        const stores = Store.find().exec();

        return stores;
    }
};

export default queryAllStores;