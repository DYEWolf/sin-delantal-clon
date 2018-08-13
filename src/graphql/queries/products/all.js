import {GraphQLList} from 'graphql';

import {ProductType} from '../../types/products';

import Products from '../../../models/products';


const queryAllProducts = {
    type: new GraphQLList(ProductType),
    resolve() {
        const products = Products.find().exec();

        return products;
    }
};

export default queryAllProducts;