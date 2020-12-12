const request = require('supertest');
const app = require('../app');
const {sequelize, Transporter, Bid} = require('../models/index');
const {queryInterface} = sequelize;
const {generateToken, verifyToken} = require('../helper/jwt');

const post_data = {
    "transporter_id": '1',
    "shipper_id": '1',
    "price": 15000,
    "status": 'rejected',
    "tracking_loc": 'solo'
};

let access_token = '';

async function getToken() {
    let userData = {email: 'anto@mail.com', password: 'alhamdu', username: 'admin'}
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
})