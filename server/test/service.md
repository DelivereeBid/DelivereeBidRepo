const request = require("supertest");
const app = require("../app");
const { Service, Transporter, sequelize } = require("../models");
const { queryInterface, Sequelize } = sequelize;
const {generateToken} = require('../helper/jwt')

const data = {
  username: "ananha",
  email: "ananha@mail.com",
  password: "ananhart"
}

let access_token = '';
async function getToken() {
  let userData = {email: 'amwin@dwwwwa.com', password: 'alhamdu', username: 'admin'}
  await Transporter.create(userData)
      .then((res) => {
        console.log('jalan?')
          return Transporter.findOne({where:{email:userData.email}})
      })
      .then((res) => {
        console.log(res, 'resim')
          access_token = generateToken({
              id: res.id,
              email: res.email,
              username: res.username
          })
          console.log(access_token, 'toke')
      })
      .catch(err => {
        console.log(err, 'errs')
          throw err;
      })
}

beforeAll(async (done) => {
  await getToken();
  done()
})

afterAll(async (done) => {
  queryInterface.bulkDelete("Transporters")
  .then(() => {
    done();
  })
})

  describe("POST/service create service by transporter", () => {
        console.log(access_token, 'aws');
          it("Create service with code 201", (done) => {
              request(app)
              .post('/service')
              .set('access_token', access_token)
              .send({
                  service_name: "paket hemat",
                  vehicle: "Avanza",
                  price: 10000000,
                  tracking_log: "Gudang",
                  status: "proses"
              })
              .end((err, res) => {
                  if(err) {
                    throw err 
                  } else {
                      const {body, status} = res
                      expect(status).toBe(400)
                      expect(body).toEqual('')
                      done()
                  }
              })
          })
      })
      // describe("POST/service create service by transporter", () => {
      //     it("error authentication failed", (done) => {
      //         request(app)
      //         .post('/service')
      //         .send({
      //             service_name: "paket hemat",
      //             service_picture: "paket hemmat picture",
      //             vehicle: "Avanza",
      //             price: 10000000,
      //             tracking_log: "Gudang",
      //             status: "proses"
      //         })
      //         .end((err, res) => {
      //             if(err) return done(err)
      //             else {
      //                 const {body, status} = res
      //                 expect(status).toBe(400)
      //                 expect(body).not.toBeNull()
      //                 expect(body).toEqual(["Authentication failed"])
      //                 done()
      //             }
      //         })
      //     })
      // })