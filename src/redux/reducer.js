import { OFFERS, CATEGORIES, SEARCH_PRODUCT, DETAIL, ADD_PRODUCT, DELETE_PRODUCT, LOADING } from "./actions.js"

const initialState = {
    offers: [],
    categories: [],
    searchProduct: [],
    productDetail: {},
    cart: [],
    loading: false,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case OFFERS:
            return {
                ...state,
                offers: action.payload,
                loading: false,
            }
        
        case CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false,
            }
            
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchProduct: action.payload,
                loading: false,
            }

        case DETAIL:
            return {
                ...state,
                productDetail: action.payload
            }

        case ADD_PRODUCT:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
            
        case DELETE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                loading: false
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}