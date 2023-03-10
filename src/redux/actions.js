import axios from "axios"

export const OFFERS= "OFFERS"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const DETAIL = "DETAIL"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const BUY_PRODUCTS = "BUY_PRODUCTS"
export const LOADING = "LOADING"
export const NUMBER = "NUMBER"
export const CLEAN_SEARCH = "CLEAN_SEARCH"
export const QUESTIONS = "QUESTIONS"
export const DESCRIPTION ="DESCRIPTION"
export const MAS_VENDIDOS ="MAS_VENDIDOS"


export function offers() {
    return async function (dispatch) {
        dispatch(loading())
        try {
            const URL = `https://api.mercadolibre.com/sites/MLA/search?q=televisor`
            const { data: result } = await axios.get(URL)
            const offers = result.results?.slice(0, 5)

            return dispatch({
                type: OFFERS,
                payload: offers
            })
    
        } catch (error) {
          console.log(error);
        }
      }
  }


  export function vendidos() {
    return async function (dispatch) {
        dispatch(loading())
        try {
            const URL = `https://api.mercadolibre.com/sites/MLA/search?q=gamers`
            const { data: result } = await axios.get(URL)
            const vendidos = result.results?.sort(() => 0.5 - Math.random()).slice(0, 5)

            return dispatch({
                type: MAS_VENDIDOS,
                payload: vendidos
            })
    
        } catch (error) {
          console.log(error);
        }
      }
  }

export function searchProduct(title) {
  return async function (dispatch) {
    dispatch(loading())
    try {
      const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${title}`
      const { data: result } = await axios.get(URL)

      return dispatch({
        type: SEARCH_PRODUCT,
        payload: result.results
      })

    } catch (error) {
      console.log(error);
    }
  }
}

export function number(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


export function cleanSearch() {
  return{
    type: CLEAN_SEARCH,
  }
}

export function verDetail(id) {
    return async function (dispatch) {
      dispatch(loading())
      try {
        const URL = `https://api.mercadolibre.com/items/${id}`
        const result = await axios.get(URL)
  
        return dispatch({
          type: DETAIL,
          payload: result.data
        })
  
      } catch (error) {
        console.log(error);
      }
    }
  }

  export function description(id) {
    return async function (dispatch) {
      dispatch(loading())
      try {
        const URL = `https://api.mercadolibre.com/items/${id}/description`
        const result = await axios.get(URL)
          return dispatch({
          type: DESCRIPTION,
          payload: result.data.plain_text
        })
  
      } catch (error) {
        console.log(error);
      }
    }
  }
  

  export function questions(id) {
    return async function (dispatch) {
      dispatch(loading())
      try {
        const URL = `https://api.mercadolibre.com/questions/search?item=${id}`
        const result = await axios.get(URL)
  
        return dispatch({
          type: QUESTIONS,
          payload: result.data.questions.slice(0, 8)
        })
  
      } catch (error) {
        console.log(error);
      }
    }
  }


export function addProduct(payload) {
  return {
    type: ADD_PRODUCT,
    payload
  }
}

export function deleteProduct(payload) {
  return {
    type: DELETE_PRODUCT,
    payload
  }
}

export function loading() {
  return {
    type: LOADING,
  }
}


