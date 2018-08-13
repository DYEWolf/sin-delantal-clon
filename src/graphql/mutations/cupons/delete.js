import {GraphQLNonNull, GraphQLID} from 'graphql'

import {CuponType} from '../../types/cupons';
import Cupon from '../../../models/cupons';

export default {
    type: CuponType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteCupon = Cupon.findByIdAndRemove(params.id).exec()
        if (!deleteCupon) throw Error("Error al borrar el cupon");
        return deleteCupon;
    }
}