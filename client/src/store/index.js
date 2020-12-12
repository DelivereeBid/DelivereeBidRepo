import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from '../axios/axiosInstance'

const initialState = {
    dataShipper: [],
    show: false,
    showEdit: false,
    shipper: {},
    access_token: ''
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

export const fetchShippersById = (id) => {
    return (dispatch) => {
        axios({
            url: `/shipper/${id}`,
            method: 'GET'
          })
            .then(({ data }) => {
                // console.log(data, 'ini fetch id')
                dispatch({
                    type: 'SET_SHIPPER',
                    payload: data
                })
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }
  }

  export const updateShipperPost = (id, payload) => {
    return (dispatch) => {
        axios({
            url: `/shipper/${id}`,
            method: 'PUT',
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

export const postShipperRemove = (id) => {
    return (dispatch) => {
        axios({
            url: `/shipper/${id}`,
            method: 'DELETE'
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

export const setLogin = (payload) => {
    // console.log('masuk 102')
    return (dispatch) => {
        // console.log('msuk action')
        axios({
            url: '/transporter/login',
            method: 'POST',
            data: {
                email: payload.email,
                password: payload.password
            }
        })
        .then(({data}) => {
            console.log(data, '<<< ini data dari action')
            dispatch({type: 'SET_TOKEN', payload: data.access_token})
        })
        .catch((err) => console.log(err, '<<< error dari action'))
    }
}

export const setSignUp = (payload) => {
    return (dispatch) => {
        axios({
            url: '/transporter/register',
            method: 'POST',
            data: payload
        })
        .then(({data}) => {
            dispatch({type: 'SET_TOKEN', payload: data.access_token})
            console.log(data, 'sukses')
        })
        .catch((err) => {
            console.log(err, '<<error')
        })
    }
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA_SHIPPER':
            return { ...state, dataShipper: action.payload}
        case 'SET_SHIPPER':
            return { ...state, shipper: action.payload}
        case 'SET_SHOW':
            return { ...state, show: action.payload}
        case 'SET_SHOW_EDIT':
            return { ...state, showEdit: action.payload, shipper: {}}
        case 'SET_TOKEN':
        console.log(action.payload, '<<< ini dari reducer')
            return {...state, access_token: action.payload}
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