import {GraphQLNonNull,GraphQLID} from 'graphql';

import {ProductType} from '../../types/products';

import Products from '../../../models/products';

const querySingleProduct = {
    type:ProductType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const product = Products.findById(params.id).exec()
        return product
    }
}

export default querySingleProduct;