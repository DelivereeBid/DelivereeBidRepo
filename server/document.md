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

_Response (201 - Created)_

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

### PUT /transporter/:id

> Register transporter account

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
    "username": <string>,
    "wallet": <int>
}
```

_Response (200 - OK)_

```
{
    msg: "Success update profile"
}
```

_Response (403 - Forbidden)_

```
[
    "Not authorized"
]
```
_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

## Post

> Post that created when transporter submit price of bid that offer by shipper

### POST /post/

> Create post only by transporter account

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
    "BidId": <int>,
    "price": <int>
}
```

_Response (200 - OK)_

```
{
    "id": <int>,
    "TransporterId": <int> from req.loggedIn auth,
    "BidId": <int>,
    "price": <int>,
    "status": "Pending" <defaultValue>,
    "tracking_log": "Pending" <defaultValue>,
    "updatedAt": "2020-12-12T14:44:40.383Z",
    "createdAt": "2020-12-12T14:44:40.383Z"
}
```

_Response (400 - Bad Request)_

```
[
    "BidId is required",
    "Price is required",
    "Price cannot minus"
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

### GET /post/

> Get post only match with transporter id

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
        "TransporterId": <int>,
        "BidId": <int>,
        "price": <int>,
        "status": "Pending" <defaultValue>,
        "tracking_log": "Pending" <defaultValue>,
        "Bid": {
            "id": 1,
            "product_picture": "https://www.indosecuritysystem.com/image/blank_image.png",
            "product_name": "kasur",
            "description": "hati hati buat bapak",
            "from": "jakarta",
            "to": "jogja",
            "ShipperId": 1
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

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### GET /post/:id

> Get post by post id and transporter id match with req.loggedIn.id

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
        "TransporterId": <int>,
        "BidId": <int>,
        "price": <int>,
        "status": "Pending" <defaultValue>,
        "tracking_log": "Pending" <defaultValue>,
        "Bid": {
            "id": 1,
            "product_picture": "https://www.indosecuritysystem.com/image/blank_image.png",
            "product_name": "kasur",
            "description": "hati hati buat bapak",
            "from": "jakarta",
            "to": "jogja",
            "ShipperId": 1
        }
    }
]
```

_Response (404 - Not found)_

```
[
    "Post not found"
]
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

### PUT /post/:id

> Update post for transporter and this allow them to set price

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
    "price": <int>,
    "status": <string>,
    "tracking_log": <string>
```

_Response (200 - OK)_

```
{
    "msg": "Success update post"
}
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
],
[
    "Failed update post"
]
```

_Response (403 - Forbidden)_

```
[
    "Not authorized"
]
```
_Response (404 - Not Found)_

```
[
    "Post not found"
]
```

_Response (500 - internal server error)_

```
[
    "Internal server error"
]
```

### DELETE /post/:id

> Delete post only by match transporterId and id target from params

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
    "msg": "Success delete post"
}
```

_Response (400 - Bad Request)_

```
[
    "Authentication failed"
],
[
    "Failed delete post"
]
```

_Response (403 - Forbidden)_

```
[
    "Not authorized"
]
```
_Response (404 - Not Found)_

```
[
    "Post not found"
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
    "email": <string>,
    "file": <file>
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
    "file": <file>,
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
