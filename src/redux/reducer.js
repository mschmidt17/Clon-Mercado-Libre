import { OFFERS, SEARCH_PRODUCT, DETAIL, ADD_PRODUCT, DELETE_PRODUCT, LOADING, CLEAN_SEARCH, NUMBER, QUESTIONS, DESCRIPTION, MAS_VENDIDOS } from "./actions.js"
import initialState from "./initialState.js"


export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case OFFERS:
            return {
                ...state,
                offers: action.payload,
                loading: false,
            }

        case MAS_VENDIDOS:
            return {
                ...state,
                vendidos: action.payload,
                loading: false,
            }
                    
        case SEARCH_PRODUCT:

            const allBrands = [];
            const allLocations = []
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    if (allBrands.includes(action.payload[i].attributes[0].value_name)) {
                        break;
                    } else {
                        allBrands.push(action.payload[i].attributes[0].value_name)
                    }
                    if (allLocations.includes(action.payload[i].address.city_name)) {
                        break;
                    } else {
                        allLocations.push(action.payload[i].address.city_name)
                    }
                }     
            }

            return {
                ...state,
                searchProduct: action.payload,
                brands: allBrands,
                locations: allLocations,
                loading: false,
            }
        
        
        case NUMBER:
            return {
                ...state,
                number: action.payload,
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