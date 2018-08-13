import {GraphQLNonNull} from 'graphql'

import {TypeRestType, TypeRestInputType} from '../../types/type_rest';
import TypeRestaurant from '../../../models/type_rest';

export default {
    type:TypeRestType,
    args:{
        data:{
            type: new GraphQLNonNull(TypeRestInputType)
        }
    },
    resolve(root,params){
        const typeRest = new TypeRestaurant(params.data);
        const newTypeRest = typeRest.save();
        if (!newTypeRest) throw Error("Error al crear el tipo de restaurante");
        return newTypeRest;
    }
}