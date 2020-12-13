import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from '../axios/axiosInstance'
<<<<<<< HEAD
<<<<<<< HEAD
const tokenShipper = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJkaWVAbWFpbC5jb20iLCJpYXQiOjE2MDc3NDg1OTZ9.2fI5SGN5_bxNyEJLcr1yk63s-A2_uqHI4kjPe5vW10I"
=======
const tokenShipper = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTYwNzc4NjgzMn0.4jN1A6guYKtGnLS67l9sWjyj0R6pIcsKPE7o8p71cq0"
const tokenTransporter = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNzc4Njk4NX0.3K82ErtuSGX1IJsNPcVLSDx-PjHeD5pu2DL72RUHuDA'
>>>>>>> ba8db3dcc122921e1d094a04b39d3b1ce182038f
=======
const tokenShipper = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTYwNzgyNjM5MH0.bp4fDnrgU3b6COtEUtA6v2NThrQIe_xzVcLhbCfUuLM"
<<<<<<< HEAD
const tokenTransporter = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNzgyNjQ4NH0.viec-wCUo-UlWoyo974i3YP-arzB7eQ5q3VymsVQfh4'
>>>>>>> e07121ccb9542773ad5c7bf4e7b6161ec43cacc1
=======
// const tokenTransporter = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNzgyNjQ4NH0.viec-wCUo-UlWoyo974i3YP-arzB7eQ5q3VymsVQfh4'
>>>>>>> 1caa4dc2a48b3b95de7e97e156c905cdcb2aa81a

const initialState = {
    dataShipper: [],
    show: false,
    showEdit: false,
    shipper: {},
    access_token: '',
    post: {},
    transporter: {},
    deal: {},
    transporterId: {}
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

  export const fetchPostById = (id) => {
    return (dispatch) => {
        axios({
            url: `/post/${id}`,
            method: 'GET'
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


export const updateWalletShipper = (id, payload) => {
  return (dispatch) => {
      axios({
          method: 'PUT',
          url: `/shipper/${id}`,
          headers: {
            access_token: tokenShipper
          },
          data: payload
        })
        .then(({data}) => {
          console.log(data, 'ini updateWalletShipper')
          //fetch ulang akun shipper
        })
        .catch(err => {
          console.log(err)
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
                dispatch({
                    type: 'SET_TRANSPORTER_ID',
                    payload: data
                })
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }
  }

  export const patchWalletTransporter = (id, payload) => {
    return (dispatch) => {
        console.log(id, 'ini id', payload, 'ini payload')
        axios({
            url: `/transporter/${id}`,
            method: 'PATCH',
            data: payload
          })
            .then(({ data }) => {
                console.log(data, 'ini patchWalletTransporter')
                //fetch ulang transporter disini
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
        case 'SET_TRANSPORTER':
            return { ...state, transporter: action.payload}
        case 'SET_TRANSPORTER_ID':
            return { ...state, transporterId: action.payload}
        case 'SET_POST':
            return { ...state, post: action.payload}
        case 'SET_DEAL':
            return { ...state, deal: action.payload}
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