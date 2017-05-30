// 选择的产品值
const initialState = {
    productValue: null,
    count:0
};

function login(state = initialState, action) {
    let count = state.count
    switch (action.type) {
        case 'SELECT_PRODUCT':
            return Object.assign({}, state, {
                productValue: action.payload
            })
        case 'COUNTER_PRODUCT_INCREASE':
            return { count:count + 1 }
        default:
            return state
    }
}

export default login;