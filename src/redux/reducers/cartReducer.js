import { productsConstants } from "../constants/productsConstants"


const initialState = {
    items: [],
    checkoutStatus: null
}

const items = (state = initialState.items, action) => {
    switch (action.type) {
        case productsConstants.ADD_TO_CART:
            const productId = action.product.id
            const product = state.find(item => item.id === productId)
            if (product) {
                product.quantity++
                return [...state]
            } else {

                return [...state, {
                    id: productId,
                    quantity: 1
                }]
            }
        case productsConstants.SET_ITEMS:
            return action.items
        default:
            return state
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case productsConstants.SET_CHECKOUT_STATUS:
            return {
                ...state,
                checkoutStatus: action.status
            }
        default:
            return {
                items: items(state.items, action),
                checkoutStatus: state.checkoutStatus
            }
    }

}