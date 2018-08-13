import {GraphQLNonNull} from 'graphql'

import {ProductType, ProductInputType} from '../../types/products';
import Products from '../../../models/products';

export default {
    type:ProductType,
    args:{
        data:{
            type: new GraphQLNonNull(ProductInputType)
        }
    },
    resolve(root,params){
        const product = new Products(params.data);
        const newProduct = product.save();
        if (!newProduct) throw Error("Error al crear el producto");
        return newProduct;
    }
}