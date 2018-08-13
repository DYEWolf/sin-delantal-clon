import {GraphQLList} from 'graphql';

import {CuponType} from '../../types/cupons';

import Cupon from '../../../models/cupons';


const queryAllCupons = {
    type: new GraphQLList(CuponType),
    resolve() {
        const cupon = Cupon.find().exec();

        return cupon;
    }
};

export default queryAllCupons;