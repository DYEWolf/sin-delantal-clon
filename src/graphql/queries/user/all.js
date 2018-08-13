import {GraphQLList} from 'graphql';

import {UserType} from '../../types/user';

import User from '../../../models/user';


const queryAllUsers = {
    type: new GraphQLList(UserType),
    resolve() {
        const users = User.find().exec();

        if(!users) throw new Error('Error al traer usuarios');

        return users;
    }
};

export default queryAllUsers;