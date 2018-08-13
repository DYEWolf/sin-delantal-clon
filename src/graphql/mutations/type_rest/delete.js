import {GraphQLNonNull, GraphQLID} from 'graphql'

import {TypeRestType} from '../../types/type_rest';
import TypeRestaurant from '../../../models/type_rest';

export default {
    type: TypeRestType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteTypeRest = TypeRestaurant.findByIdAndRemove(params.id).exec()
        if (!deleteTypeRest) throw Error("Error al borrar el tipo de restaurant");
        return deleteTypeRest;
    }
}