import {GraphQLList} from 'graphql';

import {TypeRestType} from '../../types/type_rest';

import TypeRestaurant from '../../../models/type_rest';


const queryAllTypeRest = {
    type: new GraphQLList(TypeRestType),
    resolve() {
        const typeRest = TypeRestaurant.find().exec();

        return typeRest;
    }
};

export default queryAllTypeRest;