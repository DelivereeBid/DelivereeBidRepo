const request = require('supertest');
const app = require('../app');
const {sequelize, Shipper, Bid} = require('../models/index');
const {queryInterface} = sequelize;
const {generateToken, verifyToken} = require('../helper/jwt');
// const {User} = require('../models/index');

let access_token = '';

const bid_data = {
  "product_name": 'product_1',
  "product_picture": 'product.png',
  "description": 'product_desc',
  "from": 'lajeddah',
  "to": 'BukaPedia'
};

const bid_data2 = {
  "product_name": 'product_2',
  "product_picture": 'product2.png',
  "description": 'product_desc2',
  "from": 'TokoBuka',
  "to": 'Jeddah.Id'
};

let decoded = {};

async function getToken() {
  let userData = {email: 'anto@23232.com', 
  password: 'alhamdu', username: 'admin'}
  await Shipper.create(userData)
      .then((res) => {
          return Shipper.findOne({where:
            {email:userData.email}})
      })
      .then((res) => {
          access_token = generateToken({
              id: res.id,
              email: res.email
          })
          decoded = verifyToken(access_token)
      })
      .catch(err => {
          throw err;
      })
}

async function createInitialPost() {
  const {
    product_name,
    product_picture,
    description,
    from,
    to
  } = bid_data
  await Bid.create({product_name, product_picture, description, from, to, ShipperId: decoded.id})
    .then(bid => {
        idBid = bid.id
    })
    .catch(err => {
        throw err;
    })
}

beforeAll(async (done) => {
  await getToken();
  await createInitialPost();
  done();     
})

afterAll(async (done) => {
  queryInterface.bulkDelete("Shippers")
  .then(() => {
    done();
  });
})

let idBid = 0;


// beforeEach(async (done) => {
//   queryInterface.bulkDelete("Bids")
//   .then(() => {
//     done();
//   })
// })

describe ("POST /BID" , () => {
  it("201 Success post bid - should create new bid", (done) => {
    request(app)
      .post("/bid")
      .set('access_token', access_token)
      .send(bid_data)
      .end((err, response) => {
          if(err) {
              throw err;
          } else {
              const { body, status } = response;
              expect(status).toBe(201);
              expect(body).toHaveProperty("id", expect.any(Number));
            //   expect(body).toHaveProperty("username", 'Zalada');
              expect(body).toHaveProperty("product_name", 'product_1');
              done();
          }
      });
  });
  it("400 Failed Post - should return error if product name is empty string", (done) => {
    request(app)
      .post("/bid")
      .set('access_token', access_token)
      .send({
        "product_name": '',
        "product_picture": 'product.png',
        "description": 'product_desc',
        "from": 'lajeddah',
        "to": 'BukaPedia'
      })
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Product name is required"]);
          done();
        }
      });
  });

  it("400 Failed Post - should return error if From is empty string", (done) => {
    request(app)
      .post("/bid")
      .set('access_token', access_token)
      .send({
        "product_name": 'product1',
        "product_picture": 'product.png',
        "description": 'product_desc',
        "from": '',
        "to": 'BukaPedia'
      })
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["From is required"]);
          done();
        }
      });
  });
  it("400 Failed Post - should return error if To is empty string", (done) => {
    request(app)
      .post("/bid")
      .set('access_token', access_token)
      .send({
        "product_name": 'product1',
        "product_picture": 'product.png',
        "description": 'product_desc',
        "from": 'A',
        "to": ''
      })
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["To destination is required"]);
          done();
        }
      });
  });
  it("401 Failed Post - should return error if access_token is empty", (done) => {
    request(app)
      .post("/bid")
      .send({
        "product_name": 'product1',
        "product_picture": 'product.png',
        "description": 'product_desc',
        "from": 'A',
        "to": ''
      })
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(["Authentication failed"]);
          done();
        }
      });
  });
  it("401 Failed Post - should return error if user is not authorized", (done) => {
    request(app)
      .post("/bid")
      .send({
        "product_name": 'product1',
        "product_picture": 'product.png',
        "description": 'product_desc',
        "from": 'A',
        "to": ''
      })
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(["Authentication failed"]);
          done();
        }
      });
  });
  it("400 Failed Post - should return error if product form is missing", (done) => {
    request(app)
      .post("/bid")
      .set('access_token', access_token)
      .send({
        "product_name": 'product1',
        'description': 'a',
        "to": 'B'
      })
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["From is required"]);
          done();
        }
      });
  });
  it("400 Failed Post - should return error if product name is missing", (done) => {
    request(app)
      .post("/bid")
      .set('access_token', access_token)
      .send({
        "product_picture": 'product.png',
        "description": 'product_desc',
        "from": 'A',
        "to": 'B'
      })
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Product name is required"]);
          done();
        }
      });
  });
})

describe ("GET /BID" , () => {
  it("200 Success Get - should respond if request is valid", (done) => {
    request(app)
      .get("/bid")
      .set('access_token', access_token)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(200);
          done();
        }
      });
  });
  it("200 Success GET by Id - should return value if request is valid", (done) => {
    request(app)
      .get(`/bid/${idBid}`)
      .set('access_token', access_token)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(200);
          // expect(body).toEqual({"Shipper": {"email": "anto@23232.com", "id": 964, "profile_picture": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
          // "username": "admin"}, "ShipperId": 964, "description": "product_desc", "from": "lajeddah", "id": 122, "product_name": "product_1", "product_picture": "product.png", "to": "BukaPedia"})
          done();
        }
      });
  });
  it("404 Error GET by Id - should return error if id is invalid", (done) => {
    request(app)
      .get(`/bid/5656575`)
      .set('access_token', access_token)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(404);
          // expect(body).toEqual({"Shipper": {"email": "anto@23232.com", "id": 964, "profile_picture": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
          // "username": "admin"}, "ShipperId": 964, "description": "product_desc", "from": "lajeddah", "id": 122, "product_name": "product_1", "product_picture": "product.png", "to": "BukaPedia"})
          expect(body).toEqual(["Bid not found"])
          done();
        }
      });
  });
})

describe ("PUT /BID" , () => {
  it("200 Success PUT - should respond if request is valid", (done) => {
    request(app)
      .put(`/bid/${idBid}`)
      .set('access_token', access_token)
      .send(bid_data2)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(200);
          done();
        }
      });
  });

  it("404 Error PUT - should respond error if id is invalid", (done) => {
    request(app)
      .put(`/bid/999`)
      .set('access_token', access_token)
      .send(bid_data2)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(404);
          expect(body).toEqual(['Bid not found'])
          done();
        }
      });
  });

  it("400 Error PUT - should respond error if product name is empty", (done) => {
    request(app)
      .put(`/bid/${idBid}`)
      .set('access_token', access_token)
      .send({
        "product_name": '',
        "product_picture": 'product.png',
        "description": 'product_desc',
        "from": 'lajeddah',
        "to": 'BukaPedia'
      })
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(['Product name is required'])
          done();
        }
      });
  });

  it("401 Error PUT - should respond error if access token is invalid/unauthorized", (done) => {
    request(app)
      .put(`/bid/999`)
      // .set('access_token', access_token)
      .send(bid_data2)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(['Authentication failed'])
          done();
        }
      });
  });
})

describe ("DELETE /BID" , () => {
  it("200 Success DELETE - should respond if request is valid", (done) => {
    request(app)
      .delete(`/bid/${idBid}`)
      .set('access_token', access_token)
      .send(bid_data2)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toEqual({"msg": "Success delete bid"})
          done();
        }
      });
  });
  it("404 Error DELETE - should respond error if id is invalid", (done) => {
    request(app)
      .delete(`/bid/999`)
      .set('access_token', access_token)
      .send(bid_data2)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(404);
          expect(body).toEqual(['Bid not found'])
          done();
        }
      });
  });
  it("401 Error DELETE - should respond error if access token is invalid/unauthorized", (done) => {
    request(app)
      .delete(`/bid/999`)
      // .set('access_token', access_token)
      .send(bid_data2)
      .end((err, response) => {
        if (err) {
          throw err;
        } else {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(['Authentication failed'])
          done();
        }
      });
  });
})