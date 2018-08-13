import {GraphQLNonNull, GraphQLID} from 'graphql'

import {TypeRestType, TypeRestInputType} from '../../types/type_rest';
import TypeRestaurant from '../../../models/type_rest';

export default {
    type:TypeRestType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            type: new GraphQLNonNull(TypeRestInputType)
        }
    },
    resolve(root,params){
        return TypeRestaurant.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
        .then(typeRest => typeRest)
        .catch(erre =>  Error('Error al hacer el update'))
    }
}