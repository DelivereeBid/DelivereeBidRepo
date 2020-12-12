// const request = require("supertest");
// const app = require("../app");
// const { Bid, sequelize, Shipper } = require("../models");
// const { queryInterface } = sequelize;
// const {generateToken} = require('../helper/jwt');

// describe("Bid Router Test", () => {
//   const bid_data = {
//     "product_name": 'product_1',
//     "product_picture": 'product.png',
//     "description": 'product_desc',
//     "from": 'lajeddah',
//     "to": 'BukaPedia'
//   };

//   const bid_data2 = {
//     "product_name": 'product_2',
//     "product_picture": 'product2.png',
//     "description": 'product_desc2',
//     "from": 'TokoBuka',
//     "to": 'Jeddah.Id'
// };

// let access_token = ''
  
//    function generateToken() {
//       let userData = {email: 'anto@mail.com', password: 'alhamdulilah', username: 'admin'}
//       return Shipper.create(userData)
//       .then((res) => {
//             console.log(res, 'jalan kaga');
//               return Shipper.findOne({where:{email:userData.email}})
//           })
//           .then((res) => {
//               console.log(res, 'dadada')
//               access_token = generateToken({
//                   id: res.id,
//                   email: res.email,
//                   username: res.role
//               })
//           })
//           .catch(err => {
//               throw err;
//           })
//           done()
//   }

//   beforeAll(async (done) => {
//       await generateToken();
//       done();     
//       // queryInterface.bulkDelete("Bids")
//       // .then(() => {
//       //     done();
//       // });
//   })
//   describe("POST/bid/ - create bid for shipper", () => {
    

//     // beforeAll((done) => {
//     //   Bid.create(bid_data)
//     //     .then((res) => {
//     //       done();
//     //     })
//     //     .catch((err) => {
//     //       done(err);
//     //     });
//     // });
  
//     // afterAll((done) => {
//     //   queryInterface
//     //     .bulkDelete("Shippers", {})
//     //     .then(() => done())
//     //     .catch((err) => done(err));
//     // });

    // it("201 Success post bid - should create new bid", (done) => {
    //   request(app)
    //     .post("/bid")
    //     .set('access_token', access_token)
    //     .send(bid_data)
    //     .end((err, response) => {
    //         console.log(access_token, 'tookeeen')
    //         if(err) {
    //             throw err;
    //         } else {
    //             const { body, status } = response;
    //             expect(status).toBe(201);
    //             expect(body).toHaveProperty("id", expect.any(Number));
    //           //   expect(body).toHaveProperty("username", 'Zalada');
    //           //   expect(body).toHaveProperty("email", 'zalada@mail.com');
    //             done();
    //         }
    //     });
    // });

//     // it("400 Failed Register - should return error if name is empty string", (done) => {
//     //   request(app)
//     //     .post("/shipper/register")
//     //     .send({
//     //       username: "",
//     //       email: "zalada@mail.com",
//     //       password: "halo123456",
//     //     })
//     //     .then((response) => {
//     //       const { body, status } = response;
//     //       expect(status).toBe(400);
//     //       expect(body).toEqual(["Username is required"]);
//     //       // expect(body).toBe(["Username is required"])
//     //       done();
//     //     });
//     // });

//     // it("500 Failed Register - should return error if key is null", (done) => {
//     //   request(app)
//     //     .post("/shipper/register")
//     //     .send({
//     //       email: "zalada@mail.com",
//     //       password: "halo123456",
//     //     })
//     //     .then((response) => {
//     //       const { body, status } = response;
//     //       expect(status).toBe(500);
//     //       expect(body).toEqual({});
//     //       done();
//     //     });
//     // });

//     // it("400 Failed register - should return error if email is null", (done) => {
//     //   request(app)
//     //     .post("/shipper/register")
//     //     .send({
//     //       username: "Zalada",
//     //       password: "halo123456",
//     //     })
//     //     .then((response) => {
//     //       const { body, status } = response;
//     //       expect(status).toBe(500);
//     //       expect(body).toEqual({});
//     //       done();
//     //     });
//     // });

//     // it("400 Failed register - should return error if email is empty string", (done) => {
//     //   request(app)
//     //     .post("/shipper/register")
//     //     .send({
//     //       username: "Zalada",
//     //       email: "",
//     //       password: "halo123456",
//     //     })
//     //     .then((response) => {
//     //       const { body, status } = response;
//     //       expect(status).toBe(400);
//     //       expect(body).toEqual(["Validation isEmail on email failed", "Email is required"]);
//     //       done();
//     //     });
//     // });

//     // it("400 Failed register - should return error if password is empty string", (done) => {
//     //   request(app)
//     //     .post("/shipper/register")
//     //     .send({
//     //       username: "Zalada",
//     //       email: "zalada@mail.com",
//     //       password: "",
//     //     })
//     //     .then((response) => {
//     //       const { body, status } = response;
//     //       expect(status).toBe(400);
//     //       expect(body).toEqual(["Password is required", 
//     //       "Password length minimum 4 character and maximum 10 character"]);
//     //       done();
//     //     });
//     // });

//     // it("400 Failed register - should return error if password is null", (done) => {
//     //   request(app)
//     //     .post("/shipper/register")
//     //     .send({
//     //       username: "Zalada",
//     //       email: "zalada@mail.com",
//     //     })
//     //     .then((response) => {
//     //       const { body, status } = response;
//     //       expect(status).toBe(500);
//     //       expect(body).toEqual({});
//     //       done();
//     //     });
//     // });

//     // it("400 Failed register - should return error if email have invalid format", (done) => {
//     //   request(app)
//     //     .post("/shipper/register")
//     //     .send({
//     //       username: "Zalada",
//     //       email: "zalada.com",
//     //       password: "halo123456",
//     //     })
//     //     .then((response) => {
//     //       const { body, status } = response;
//     //       expect(status).toBe(400);
//     //       expect(body).toEqual(["Validation isEmail on email failed"]);
//     //       done();
//     //     });
//     // });

//     // it("400 Failed register - should return error if email already in used", (done) => [
//     //   request(app)
//     //     .post("/shipper/register")
//     //     .send({
//     //       username: "Tutuplapak",
//     //       email: "tutuplapak@mail.com",
//     //       password: "halo123456",
//     //     })
//     //     .then((response) => {
//     //       const { body, status } = response;
//     //       expect(status).toBe(400);
//     //       console.log(body, 'www')
//     //       expect(body).toEqual(["Email must be unique"]);
//     //       done();
//     //     }),
//     // ]);
//   });

// //   describe("POST/login - shipper authentication process", () => {
// //     beforeAll((done) => {
// //       Shipper.create(shipper_data)
// //         .then((_) => {
// //           done();
// //         })
// //         .catch((err) => {
// //           done(err);
// //         });
// //     });

// //     afterAll((done) => {
// //       queryInterface
// //         .bulkDelete("Shippers", {})
// //         .then(() => done())
// //         .catch((err) => done(err));
// //     });

// //     it("200 Success Login - should return access_token", (done) => {
// //       request(app)
// //         .post("/shipper/login")
// //         .send(shipper_data)
// //         .then((response) => {
// //           const { body, status } = response;
// //           expect(status).toBe(200);
// //           expect(body).toHaveProperty("access_token", expect.any(String));
// //           done();
// //         });
// //     });

// //     it("400 Failed Login - should return error if email/password invalid", (done) => {
// //       request(app)
// //         .post("/shipper/login")
// //         .send({
// //           email: "dalaza@mail.com",
// //           password: "halo123456",
// //         })
// //         .then((response) => {
// //           const { body, status } = response;
// //           expect(status).toBe(400);
// //           expect(body).toEqual(["Invalid email or password"]);
// //           done();
// //         });
// //     });
// //   });
// });

const request = require('supertest');
const app = require('../app');
const {sequelize, Shipper} = require('../models/index');
const {queryInterface} = sequelize;
const {generateToken} = require('../helper/jwt');
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

async function getToken() {
  let userData = {email: 'anto@mail.com', password: 'alhamdu', username: 'admin'}
  await Shipper.create(userData)
      .then((res) => {
          return Shipper.findOne({where:{email:userData.email}})
      })
      .then((res) => {
          access_token = generateToken({
              id: res.id,
              email: res.email,
              role: res.role
          })
      })
      .catch(err => {
          throw err;
      })
}

beforeAll(async (done) => {
    await getToken();
    done();     
    queryInterface.bulkDelete("Bids")
        .then(() => {
            done();
        });
})

describe ("POST /BID" , () => {
  it("201 Success post bid - should create new bid", (done) => {
    request(app)
      .post("/bid")
      .set('access_token', access_token)
      .send(bid_data)
      .end((err, response) => {
          console.log(access_token, 'tookeeen')
          if(err) {
              throw err;
          } else {
              const { body, status } = response;
              expect(status).toBe(201);
              expect(body).toHaveProperty("id", expect.any(Number));
            //   expect(body).toHaveProperty("username", 'Zalada');
            //   expect(body).toHaveProperty("email", 'zalada@mail.com');
              done();
          }
      });
  });
})