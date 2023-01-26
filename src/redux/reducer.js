import { OFFERS, SEARCH_PRODUCT, DETAIL, ADD_PRODUCT, DELETE_PRODUCT, LOADING, CLEAN_SEARCH, QUESTIONS, DESCRIPTION } from "./actions.js"
import initialState from "./initialState.js"


export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case OFFERS:
            return {
                ...state,
                offers: action.payload,
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
                productDetail: action.payload,
                imageDetail: action.payload.pictures[0]?.url
            }

        case QUESTIONS:
            return {
                ...state,
                questions: action.payload,
            }

        case DESCRIPTION:
            return {
                ...state,
                description: action.payload,
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

        case CLEAN_SEARCH:
            return{
                ...state,
                searchProduct: [],
                productDetail: {},
                imageDetail: ""
            } 

        default:
            return state
    }
}