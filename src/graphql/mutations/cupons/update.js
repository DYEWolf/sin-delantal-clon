import {GraphQLNonNull, GraphQLID} from 'graphql'

import {CuponType, CuponInputType} from '../../types/cupons';
import Cupon from '../../../models/cupons';

export default {
    type:CuponType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            type: new GraphQLNonNull(CuponInputType)
        }
    },
    resolve(root,params){
        return Cupon.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
        .then(cupon => cupon)
        .catch(erre =>  Error('Error al hacer el update'))
    }
}