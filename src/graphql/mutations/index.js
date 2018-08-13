import cupon from './cupons';
import order from './order';
import product from './products';
import store from './store';
import typeRest from './type_rest';

export default {
    ...cupon,
    ...order,
    ...product,
    ...store,
    ...typeRest
}