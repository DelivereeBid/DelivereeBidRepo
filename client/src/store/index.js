import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from '../axios/axiosInstance'
const tokenShipper = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTYwNzgyNjM5MH0.bp4fDnrgU3b6COtEUtA6v2NThrQIe_xzVcLhbCfUuLM"
const tokenTransporter = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNzgyNjQ4NH0.viec-wCUo-UlWoyo974i3YP-arzB7eQ5q3VymsVQfh4'

const initialState = {
    dataShipper: [],
    show: false,
    showEdit: false,
    shipper: {},
    post: {},
    transporter: {}
}

export const fetchShippers = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: '/bid',
            headers: {
              access_token: tokenShipper
            }
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
            url: `/bid/${id}`,
            method: 'GET',
            headers: {
              access_token: tokenShipper
            }
          })
            .then(({ data }) => {
                // console.log(data, 'ini fetch id')
                dispatch({
                    type: 'SET_SHIPPER',
                    payload: data[0]
                })
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }
  }

  export const transporterById = (id) => {
    return (dispatch) => {
        axios({
            url: `/transporter/${id}`,
            method: 'GET'
          })
            .then(({ data }) => {
                // console.log(data, 'ini fetch id')
                dispatch({
                    type: 'SET_TRANSPORTER',
                    payload: data[0]
                })
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }
  }

  export const fetchPostById = (id) => {
    return (dispatch) => {
        axios({
            url: `/post/${id}`,
            method: 'GET',
            headers: {
              access_token: tokenTransporter
            }
          })
            .then(({ data }) => {
                // console.log(data, 'ini fetch id')
                dispatch({
                    type: 'SET_POST',
                    payload: data
                })
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }
  }

  export const updateShipperPost = (id, payload) => {
    const formData = new FormData();
    if(payload.file) {
        formData.append('file',payload.file)
    } else {
        formData.append('product_picture',payload.product_picture)
    }
    formData.append('product_name', payload.product_name)
    formData.append('from', payload.from)
    formData.append('to', payload.to)
    formData.append('description', payload.description)
    return (dispatch) => {
        axios({
            url: `/bid/${id}`,
            method: 'PUT',
            data: formData,
            headers: {
              access_token: tokenShipper,
              'content-type': 'multipart/form-data'
            }
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
    const formData = new FormData();
    formData.append('file',payload.file)
    formData.append('product_name', payload.product_name)
    formData.append('from', payload.from)
    formData.append('to', payload.to)
    formData.append('description', payload.description)
    return (dispatch) => {
        // console.log(payload)
        axios({
            url: '/bid',
            method: 'POST',
            data: formData,
            headers: {
              access_token: tokenShipper,
              'content-type': 'multipart/form-data'
            }
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
            url: `/bid/${id}`,
            method: 'DELETE',
            headers: {
              access_token: tokenShipper
            }
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
        case 'SET_SHIPPER':
            return { ...state, shipper: action.payload}
        case 'SET_TRANSPORTER':
            return { ...state, transporter: action.payload}
        case 'SET_POST':
            return { ...state, post: action.payload}
        case 'SET_SHOW':
            return { ...state, show: action.payload}
        case 'SET_SHOW_EDIT':
            return { ...state, showEdit: action.payload, shipper: {}}
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