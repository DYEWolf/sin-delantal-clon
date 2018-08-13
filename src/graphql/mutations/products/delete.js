import {GraphQLNonNull, GraphQLID} from 'graphql'

import {ProductType} from '../../types/products';
import Products from '../../../models/products';

export default {
    type: ProductType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteProduct = Products.findByIdAndRemove(params.id).exec()
        if (!deleteProduct) throw Error("Error al borrar el producto");
        return deleteProduct;
    }
}