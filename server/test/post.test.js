const request = require('supertest');
const app = require('../app');
const {sequelize, Transporter, Post} = require('../models/index');
const {queryInterface} = sequelize;
const {generateToken, verifyToken} = require('../helper/jwt');

const post_data = {
    "BidId": '1',
    "price": 15000
};

let access_token = '';
let postId = 0;
let decoded = {};

let access_token2 = '';
let decoded2 = {};

async function getToken(email) {
    let userData = {email, password: 'alhamdu', username: 'admin'}
    await Transporter.create(userData)
        .then((res) => {
            return Transporter.findOne({where:{email:userData.email}})
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

async function getToken2(email) {
  let userData = {email, password: 'alhamdu', username: 'admin'}
  await Transporter.create(userData)
      .then((res) => {
          return Transporter.findOne({where:{email:userData.email}})
      })
      .then((res) => {
          access_token2 = generateToken({
              id: res.id,
              email: res.email
          })
          decoded2 = verifyToken(access_token)
      })
      .catch(err => {
          throw err;
      })
}

async function createInitialPost() {
  const {
    BidId,
    price
  } = post_data
  await Post.create({TransporterId: decoded.id, BidId, 
    price, status: 'Pending', tracking_log: 'Pending'})
    .then(res => {
        postId = res.id
    })
    .catch(err => {
        throw err;
    })
}

beforeAll(async (done) => {
    await getToken('anto@mail.ac');
    await getToken2('danang@mail.ac')
    await createInitialPost();
    done();     
  })
  
  afterAll(async (done) => {
    queryInterface.bulkDelete("Transporters")
    .then(() => {
      done();
    });
  })

describe("POST /post", () => {
    it("201 Success POST /post - should create new post", (done) => {
        request(app)
          .post("/post")
          .set('access_token', access_token)
          .send(post_data)
          .end((err, response) => {
              if(err) {
                  throw err;
              } else {
                  const { body, status } = response;
                  expect(status).toBe(201);
                  expect(body).toHaveProperty("id", expect.any(Number));
                //   expect(body).toHaveProperty("username", 'Zalada');
                //   expect(body).toHaveProperty("product_name", 'product_1');
                  // expect(body).toEqual({"BidId": 1, "TransporterId": 6, "createdAt": "2020-12-12T15:59:15.322Z", "id": 2, "price": 15000, "status": "Pending", "tracking_log": "Pending", "updatedAt": new Date()})
                  done();
              }
          });
      });
      it("401 Failed Post - should return error if not authorized", (done) => {
          request(app)
            .post("/post")
            // .set('access_token', access_token)
            .send(post_data)
            .end((err, response) => {
                if(err) {
                    throw err;
                } else {
                    const { body, status } = response;
                    expect(status).toBe(401);
                    expect(body).toEqual(["Authentication failed"])
                    done();
                }
            })
      })
      it("400 Failed Post - should return error if BidId is empty string", (done) => {
        request(app)
          .post("/post")
          .set('access_token', access_token)
          .send({
            BidId: '',
            price: 2000
          })
          .end((err, response) => {
            if(err) {
              throw err;
          } else {
              const { body, status } = response;
              expect(status).toBe(400);
              expect(body).toEqual(["BidId is required"])
              done();
          }
          })
      })
      it("400 Failed Post - should return error if price is below zero", (done) => {
        request(app)
          .post("/post")
          .set('access_token', access_token)
          .send({
            BidId: 3,
            price: -5000
          })
          .end((err, response) => {
            if(err) {
              throw err;
          } else {
              const { body, status } = response;
              expect(status).toBe(400);
              expect(body).toEqual(["Price cannot minus"])
              done();
          }
          })
      })
      it("400 Failed Post - should return error if BidId is null", (done) => {
        request(app)
          .post("/post")
          .set('access_token', access_token)
          .send({
            price: 10000
          })
          .end((err, response) => {
            if(err) {
              throw err;
          } else {
              const { body, status } = response;
              expect(status).toBe(400);
              expect(body).toEqual(["BidId is required"])
              done();
          }
          })
      })
      it("400 Failed Post - should return error if price is null", (done) => {
        request(app)
          .post("/post")
          .set('access_token', access_token)
          .send({
            BidId: 5
          })
          .end((err, response) => {
            if(err) {
              throw err;
          } else {
              const { body, status } = response;
              expect(status).toBe(400);
              expect(body).toEqual(["Price is required"])
              done();
          }
          })
      })
})

describe("GET /post", () => {
  it("200 Success GET - should return post values", (done) => {
    request(app)
      .get("/post")
      .set('access_token', access_token)
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(200);
          done();
      }
      })
  })
  it("200 Success GET - should return post by id", (done) => {
    request(app)
      .get(`/post/${postId}`)
      .set('access_token', access_token)
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(200);
          // expect(body).toEqual(["Authentication failed"])
          done();
      }
      })
  })
  it("401 Failed GET - should return error if not authorized", (done) => {
    request(app)
      .get("/post")
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(["Authentication failed"])
          done();
      }
      })
  })
  it("404 Failed GET - should return error if post not found", (done) => {
    request(app)
      .get(`/post/595959`)
      .set('access_token', access_token)
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(404);
          expect(body).toEqual(["Post not found"])
          done();
      }
      })
  })
})

describe("PUT /post", () => {
  it("200 Success UPDATE - should update post values", (done) => {
    request(app)
      .put(`/post/${postId}`)
      .set('access_token', access_token)
      .send({
        price: 5000,
        status: 'ready',
        tracking_log: 'bekasi'
      })
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(200);
          done();
      }
      })
  })
  it("401 Error UPDATE authentication - should return error if token is not authorized", (done) => {
    request(app)
      .put(`/post/${postId}`)
      .send({
        price: 5000,
        status: 'ready',
        tracking_log: 'bekasi'
      })
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(["Authentication failed"])
          done();
      }
      })
  })
  it("400 Error UPDATE minus price - should return error if price is minus", (done) => {
    request(app)
      .put(`/post/${postId}`)
      .set('access_token', access_token)
      .send({
        price: -5000,
        status: 'ready',
        tracking_log: 'bekasi'
      })
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Price cannot minus"])
          done();
      }
      })
  })
  it("400 Error UPDATE empty status - should return error if status is empty string", (done) => {
    request(app)
      .put(`/post/${postId}`)
      .set('access_token', access_token)
      .send({
        price: 5000,
        status: '',
        tracking_log: 'bekasi'
      })
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Status cannot be empty"])
          done();
      }
      })
  })
  it("400 Error UPDATE empty tracking log - should return error if tracking log is empty string", (done) => {
    request(app)
      .put(`/post/${postId}`)
      .set('access_token', access_token)
      .send({
        price: 5000,
        status: 'Pending',
        tracking_log: ''
      })
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Tracking loc is required"])
          done();
      }
      })
  })
  it("403 Error UPDATE not authorized - should return error if update is not authorized", (done) => {
    request(app)
      .put(`/post/${postId}`)
      .set('access_token', access_token2)
      .send({
        price: 5000,
        status: 'Pending',
        tracking_log: ''
      })
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(403);
          expect(body).toEqual(["Not authorized"])
          done();
      }
      })
  })
})

describe("DELETE /post", () => {
  it("200 Success DELETE - should delete post value", (done) => {
    request(app)
      .delete(`/post/${postId}`)
      .set('access_token', access_token)
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toEqual({"msg": "Success delete post"})
          done();
      }
      })
  })
  it("401 Error DELETE authentication - should return error if not authorized", (done) => {
    request(app)
      .delete(`/post/${postId}`)
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(["Authentication failed"])
          done();
      }
      })
  })
  it("404 Error DELETE id not found - should return error if post id not found", (done) => {
    request(app)
      .delete(`/post/6262626`)
      .set('access_token', access_token)
      .end((err, response) => {
        if(err) {
          throw err;
      } else {
          const { body, status } = response;
          expect(status).toBe(404);
          expect(body).toEqual(["Post not found"])
          done();
      }
      })
  })
})