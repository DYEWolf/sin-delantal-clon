import {GraphQLNonNull, GraphQLID} from 'graphql'

import {ProductType, ProductInputType} from '../../types/products';
import Products from '../../../models/products';

export default {
    type:ProductType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            type: new GraphQLNonNull(ProductInputType)
        }
    },
    resolve(root,params){
        return Products.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
        .then(product => product)
        .catch(erre =>  Error('Error al hacer el update'))
    }
}