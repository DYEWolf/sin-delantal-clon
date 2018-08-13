import user from './user';
import typeRest from './type_rest';
import cupons from './cupons';
import products from './products';
import stores from './store';
import order from './order';

export default {
    ...user,
    ...typeRest,
    ...cupons,
    ...products,
    ...stores,
    ...order
}