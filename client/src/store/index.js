import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "../axios/axiosInstance";

const tokenShipper = localStorage.getItem("shipper_token");
const tokenTransporter = localStorage.getItem("transporter_token");

const initialState = {
  dataShipper: [],
  show: false,
  showEdit: false,
  shipper: {},
  transporter_token: "",
  shipper_token: "",
  post: {},
  transporter: {},
  deal: {},
  transporterId: {},
  dataTransporter: [],
  profileTransporter: [],
};

export const fetchShippers = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "/bid",
      headers: {
        access_token: tokenShipper,
      },
    })
      .then((res) => {
        dispatch({
          type: "SET_DATA_SHIPPER",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchShippersById = (id) => {
  return (dispatch) => {
    axios({
      url: `/bid/${id}`,
      method: "GET",
      headers: {
        access_token: tokenShipper,
      },
    })
      .then(({ data }) => {
        // console.log(data, 'ini fetch id')
        dispatch({
          type: "SET_SHIPPER",
          payload: data[0],
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};

export const fetchPostById = (id) => {
  return (dispatch) => {
    axios({
      url: `/post/${id}`,
      method: "GET",
    })
      .then(({ data }) => {
        // console.log(data, 'ini fetch id')
        dispatch({
          type: "SET_POST",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};

export const patchPostById = (id, payload) => {
  return (dispatch) => {
    axios({
      url: `/post/${id}`,
      method: "PATCH",
      data: payload,
    })
      .then(({ data }) => {
        console.log(data, "ini patch post id");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};

export const updateWalletShipper = (id, payload) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `/shipper/${id}`,
      headers: {
        access_token: tokenShipper,
      },
      data: payload,
    })
      .then(({ data }) => {
        console.log(data, "ini updateWalletShipper");
        //fetch ulang akun shipper
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const transporterById = (id) => {
  return (dispatch) => {
    axios({
      url: `/transporter/${id}`,
      method: "GET",
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_TRANSPORTER_ID",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};

export const patchWalletTransporter = (id, payload) => {
  return (dispatch) => {
    console.log(id, "ini id", payload, "ini payload");
    axios({
      url: `/transporter/${id}`,
      method: "PATCH",
      data: payload,
    })
      .then(({ data }) => {
        console.log(data, "ini patchWalletTransporter");
        //fetch ulang transporter disini
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};

export const updateShipperPost = (id, payload) => {
  const formData = new FormData();
  if (payload.file) {
    formData.append("file", payload.file);
  } else {
    formData.append("product_picture", payload.product_picture);
  }
  formData.append("product_name", payload.product_name);
  formData.append("from", payload.from);
  formData.append("to", payload.to);
  formData.append("description", payload.description);
  return (dispatch) => {
    axios({
      url: `/bid/${id}`,
      method: "PUT",
      data: formData,
      headers: {
        access_token: tokenShipper,
        "content-type": "multipart/form-data",
      },
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(fetchShippers());
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};

export const createPostShipper = (payload) => {
  const formData = new FormData();
  formData.append("file", payload.file);
  formData.append("product_name", payload.product_name);
  formData.append("from", payload.from);
  formData.append("to", payload.to);
  formData.append("description", payload.description);
  return (dispatch) => {
    // console.log(payload)
    axios({
      url: "/bid",
      method: "POST",
      data: formData,
      headers: {
        access_token: tokenShipper,
        "content-type": "multipart/form-data",
      },
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(fetchShippers());
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};

export const postShipperRemove = (id) => {
  return (dispatch) => {
    axios({
      url: `/bid/${id}`,
      method: "DELETE",
      headers: {
        access_token: tokenShipper,
      },
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(fetchShippers());
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};

export const setLogin = (payload) => {
  return (dispatch) => {
    axios({
      url: "/transporter/login",
      method: "POST",
      data: {
        email: payload.email,
        password: payload.password,
      },
    })
      .then(({ data }) => {
        localStorage.setItem("transporter_token", data.access_token);
        dispatch({ type: "SET_TRANSPORTER_TOKEN", payload: data.access_token });
        dispatch({ type: "SET_TRANSPORTER_ID", payload: data.id });
      })
      .catch((err) => console.log(err.response, "<<< error dari action"));
  };
};

export const setLoginShipper = (payload) => {
  return (dispatch) => {
    axios({
      url: "/shipper/login",
      method: "POST",
      data: {
        email: payload.email,
        password: payload.password,
      },
    })
      .then(({ data }) => {
        localStorage.setItem("shipper_token", data.access_token);
        dispatch({ type: "SET_SHIPPER_TOKEN", payload: data.access_token });
      })
      .catch((err) => console.log(err.response, "<<< error dari action"));
  };
};

export const setBid = (payload) => {
  return (dispatch) => {
    axios({
      url: "/post",
      method: "POST",
      headers: {
        access_token: tokenTransporter,
      },
      data: {
        BidId: payload.BidId,
        price: payload.price,
      },
    })
      .then(({ data }) => {
        console.log(data, "<<<< dari setbid action");
      })
      .catch((err) => console.log(err, "<<< eror setBid action"));
  };
};

export const setSignUp = (payload) => {
  const formData = new FormData();
  formData.append("file", payload.file);
  formData.append("username", payload.username);
  formData.append("email", payload.email);
  formData.append("password", payload.password);
  formData.append("vehicle", payload.vehicle);
  return (dispatch) => {
    axios({
      url: "/transporter/register",
      method: "POST",
      data: formData,
    })
      .then(({ data }) => {
        dispatch({ type: "SET_TOKEN", payload: data.access_token });
        console.log(data, "sukses");
      })
      .catch((err) => {
        console.log(err, "<<error");
      });
  };
};

export const setSignUpShipper = (payload) => {
  const formData = new FormData();
  formData.append("file", payload.file);
  formData.append("username", payload.username);
  formData.append("email", payload.email);
  formData.append("password", payload.password);
  return (dispatch) => {
    axios({
      url: "/shipper/register",
      method: "POST",
      data: formData,
    })
      .then(({ data }) => {
        dispatch({ type: "SET_TOKEN", payload: data.access_token });
        console.log(data, "sukses");
      })
      .catch((err) => {
        console.log(err, "<<error");
      });
  };
};

export const fetchTransporter = () => {
  // console.log('masuk fetch action')
  return (dispatch) => {
    // console.log('masuk dalem axios')
    axios({
      method: "GET",
      url: "/bid",
      headers: {
        access_token: tokenTransporter,
      },
    })
      .then((res) => {
        dispatch({
          type: "SET_DATA_TRANSPORTER",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchProfileTransporter = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "/transporter",
      headers: {
        access_token: tokenTransporter,
      },
    })
      .then((res) => {
        dispatch({
          type: "SET_PROFILE_TRANSPORTER",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA_SHIPPER":
      return { ...state, dataShipper: action.payload };
    case "SET_PROFILE_TRANSPORTER":
      return { ...state, profile_picture: action.payload };
    case "SET_DATA_TRANSPORTER":
      return { ...state, dataTransporter: action.payload };
    case "SET_SHIPPER":
      return { ...state, shipper: action.payload };
    case "SET_TRANSPORTER":
      return { ...state, transporter: action.payload };
    case "SET_TRANSPORTER_ID":
      localStorage.setItem("transporterId", action.payload);
      return { ...state, transporterId: action.payload };
    case "SET_POST":
      return { ...state, post: action.payload };
    case "SET_DEAL":
      return { ...state, deal: action.payload };
    case "SET_SHOW":
      return { ...state, show: action.payload };
    case "SET_SHOW_EDIT":
      return { ...state, showEdit: action.payload, shipper: {} };
    case "SET_TRANSPORTER_TOKEN":
      // console.log(action.payload, '<<< ini dari reducer')
      return { ...state, access_token: action.payload };
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
