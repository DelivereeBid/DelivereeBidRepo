# DelivereeBid

DelivereeBid is a marketplace for logistic services between shippers and transporters, the marketplace provides a platform for both to interact with each other, giving easier solution for transportation.

## Transporter

### POST /transporter/register

> Register transporter account

_Request Params_

```
Not needed
```

_Request Headers_

```
Not needed
```

_Request Body_

```
{
    "username": <string>,
    "email": <string>,
    "password": <string>
}
```

_Response (200 - OK)_

```
{
    "id": <int>,
    "username": <string>,
    "email": <string>
}
```

_Response (400 - Bad Request)_

```
[
    "Username is required",
    "Validation isEmail on email failed",
    "Email is required",
    "Password is required",
    "Password length minimum 4 character and maximum 10 character"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### POST /transporter/login

> Login transporter account

_Request Params_

```
Not needed
```

_Request Headers_

```
Not needed
```

_Request Body_

```
{
    "email": <string>,
    "password": <string>
}
```

_Response (200 - OK)_

```
{
    "access_token": <string>,
    "email": <string>,
    "id": <int>,
    "username": <string.
}
```

_Response (500 - internal server error)_

```
[
    "Invalid email or password"
]
```

### GET /transporter/

> Register transporter account

_Request Params_

```
Not needed
```

_Request Headers_

```
Not needed
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
[
    {
        "id": <int>,
        "username": <string>,
        "email": <string>,
        "profile_picture": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" <string>,
        "wallet": 0 <int>,
        "createdAt": "2020-12-11T04:30:20.094Z",
        "updatedAt": "2020-12-11T04:30:20.094Z"
    }...
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

## Service

> Service that provide by transporter

### POST /service/

> Create server only by transporter account

_Request Params_

```
Not needed
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
{
    "service_name": <string>,
    "service_picture": <string>,
    "vehicle": <string>,
    "price": <int>,
    "tracking_log": <string>,
    "status": <string>
}
```

_Response (200 - OK)_

```
{
    "id": <int>,
    "service_name": <string>,
    "service_picture": <string>,
    "vehicle": <string>,
    "price": <int>,
    "tracking_log": <string>,
    "status": <string>,
    "TransporterId": <int>
    "updatedAt": "2020-12-11T04:25:29.710Z",
    "createdAt": "2020-12-11T04:25:29.710Z"
}
```

_Response (400 - Bad Request)_

```
[
    "Service name is required",
    "Service picture is required",
    "Vehicle is required",
    "Price is required",
    "Tracking log is required"
],
[
    "Authentication failed"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### GET /service/

> Get service

_Request Params_

```
Not needed
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
{
    "id": <int>,
    "service_name": <string>,
    "service_picture": <string>,
    "vehicle": <string>,
    "price": <int>,
    "tracking_log": <string>,
    "status": <string>,
    "TransporterId": <int>,
    "Transporter": {
        "id": <int>,
        "username": <string>,
        "email": <string>,
        "profile_picture": <string>
    }
}
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### GET /service/:id

> Get service

_Request Params_

```
id
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
{
    "id": <int>,
    "service_name": <string>,
    "service_picture": <string>,
    "vehicle": <string>,
    "price": <int>,
    "tracking_log": <string>,
    "status": <string>,
    "TransporterId": <int>,
    "Transporter": {
        "id": <int>,
        "username": <string>,
        "email": <string>,
        "profile_picture": <string>
    }
}
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### PUT /service/:id

> Get service

_Request Params_

```
id
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
{
    "service_name": <string>,
    "service_picture": <string>,
    "vehicle": <string>,
    "price": <int>,
    "tracking_log": <string>,
    "status": <string>
}
```

_Response (200 - OK)_

```
{
    "service": [
        1
    ],
    "msg": "Success update service"
}
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
]
```

_Response (404 - Not Found)_

```
[
    "Service not found"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### DELETE /service/:id

> Get service

_Request Params_

```
id
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
{
    "msg": "Success delete service"
}
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
]
```

_Response (404 - Not Found)_

```
[
    "Service not found"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

## Shipper

### POST /shipper/register

> Register shipper account

_Request Params_

```
Not needed
```

_Request Headers_

```
Not needed
```

_Request Body_

```
{
    "username": <string>,
    "email": <string>,
    "password": <string>
}
```

_Response (200 - OK)_

```
{
    "id": <int>,
    "username": <string>,
    "email": <string>
}
```

_Response (400 - Bad Request)_

```
[
    "Email must be unique",
    "Username is required",
    "Validation isEmail on email failed",
    "Email is required",
    "Password is required",
    "Password length minimum 4 character and maximum 10 character"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### POST /shipper/login

> Login shipper account

_Request Params_

```
Not needed
```

_Request Headers_

```
Not needed
```

_Request Body_

```
{
    "email": <string>,
    "password": <string>
}
```

_Response (200 - OK)_

```
{
    "access_token": <string>,
    "email": <string>,
    "id": <int>,
    "username": <string>
}
```

_Response (400 - Bad Request)_

```
[
    "Email must be unique",
    "Username is required",
    "Validation isEmail on email failed",
    "Email is required",
    "Password is required",
    "Password length minimum 4 character and maximum 10 character"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### GET /shipper

> Get all shipper registered

_Request Params_

```
Not needed
```

_Request Headers_

```
Not needed
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
[
    {
        "id": <int>,
        "username": <string>,
        "email": <string>,
        "profile_picture": <string>,
        "wallet": <int>,
        "createdAt": "2020-12-11T05:32:47.670Z",
        "updatedAt": "2020-12-11T05:32:47.670Z"
    }...
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

## Bid

### POST /bid/

> Create bid only by shipper account, Offering service for transporter

_Request Params_

```
Not needed
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
{
    "product_name": <string>,
    "product_picture": <string>,
    "description": <string>,
    "from": <string>,
    "to": <string>
}
```

_Response (200 - OK)_

```
{
    "id": <int>,
    "product_name": <string>,
    "product_picture": <string>,
    "description": <string>,
    "from": <string>,
    "to": <string>,
    "ShipperId": <int>,
    "updatedAt": "2020-12-11T05:58:12.501Z",
    "createdAt": "2020-12-11T05:58:12.501Z"
}
```

_Response (400 - Bad Request)_

```
[
    "Product picture is required",
    "Product name is required",
    "From is required",
    "To destination is required"
],
[
    "Authentication failed"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```
### GET /bid

> Get all bid that offer by shipper

_Request Params_

```
Not needed
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
[
    {
        "id": <int>,
        "product_picture": <string>,
        "product_name": <string>,
        "description": <string>,
        "from": <string>,
        "to": <string>,
        "ShipperId": <int>,
        "Shipper": {
            "id": <int>,
            "username": <string>,
            "email": <string>,
            "profile_picture": <string>
        }
    }
]
```

_Response (400 - Bad Request)_

```
    "Authentication failed"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```
### GET /bid/:id

> Get bid by id that offer by shipper

_Request Params_

```
id
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
[
    {
        "id": <int>,
        "product_picture": <string>,
        "product_name": <string>,
        "description": <string>,
        "from": <string>,
        "to": <string>,
        "ShipperId": <int>,
        "Shipper": {
            "id": <int>,
            "username": <string>,
            "email": <string>,
            "profile_picture": <string>
        }
    }
]
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
]
```
_Response (404 - Not Found)_

```
[
    "Service not found"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```
### PUT /bid/:id

> Update bid by id that offer by shipper

_Request Params_

```
id
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
{
    "product_picture": <string>,
    "product_name": <string>,
    "description": <string>,
    "from": <string>,
    "to": <string>
}
```

_Response (200 - OK)_

```
{
    "msg": "Success update bid"
}
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
]
```
_Response (404 - Not Found)_

```
[
    "Bid not found"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```
### DELETE /bid/:id

> Delete bid by id that offer by shipper

_Request Params_

```
id
```

_Request Headers_

```
access_token: <string>
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
{
    "msg": "Success delete bid"
}
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
]
```
_Response (404 - Not Found)_

```
[
    "Bid not found"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```
