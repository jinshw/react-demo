import { createAction } from 'redux-actions';

// 选择产品
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const COUNTER_PRODUCT = 'COUNTER_PRODUCT_INCREASE';

let selectProduct = createAction(SELECT_PRODUCT);
let counterProduct = createAction(COUNTER_PRODUCT)

export { selectProduct }
export { counterProduct }
