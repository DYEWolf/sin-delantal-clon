import {GraphQLNonNull} from 'graphql'

import {CuponType, CuponInputType} from '../../types/cupons';
import Cupon from '../../../models/cupons';

export default {
    type:CuponType,
    args:{
        data:{
            type: new GraphQLNonNull(CuponInputType)
        }
    },
    resolve(root,params){
        const cupon = new Cupon(params.data);
        const newCupon = cupon.save();
        if (!newCupon) throw Error("Error al crear el cupon");
        return newCupon;
    }
}