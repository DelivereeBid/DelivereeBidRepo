import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from '../axios/axiosInstance'

const initialState = {
    dataShipper: [],
    show: false
}

export const fetchShippers = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: '/shipper'
          })
          .then(res => {
            dispatch({
                type: 'SET_DATA_SHIPPER',
                payload: res.data
            })
          })
          .catch(err => {
            console.log(err)
          })
    }
}

export const createPostShipper = (payload) => {
    return (dispatch) => {
        // console.log(payload)
        axios({
            url: '/shipper',
            method: 'POST',
            data: payload
          })
            .then(({ data }) => {
                console.log(data)
                dispatch(fetchShippers())
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA_SHIPPER':
            return { ...state, dataShipper: action.payload}
        case 'SET_SHOW':
            return { ...state, show: action.payload}
        default:
            return state
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store