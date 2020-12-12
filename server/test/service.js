const request = require("supertest");
const app = require("../app");
const { Service, Transporter, sequelize } = require("../models");
const { queryInterface, Sequelize } = sequelize;
const {generateToken} = require('../helper/jwt')




// afterAll(async (done) => {
  //     try {
//       await queryInterface.dropTable('Services');
//       await queryInterface.createTable('Services', {
  //         id: {
    //           allowNull: false,
    //           autoIncrement: true,
    //           primaryKey: true,
    //           type: Sequelize.INTEGER
    //         },
    //         service_name: {
      //           allowNull: false,
//           type: Sequelize.STRING
//         },
//         service_picture: {
  //           allowNull: false,
//           type: Sequelize.STRING
//         },
//         vehicle: {
//           allowNull: false,
//           type: Sequelize.STRING
//         },
//         price: {
  //           allowNull: false,
  //           type: Sequelize.INTEGER
  //         },
  //         tracking_log: {
    //           allowNull: false,
    //           type: Sequelize.STRING
//         },
//         status: {
  //           allowNull: false,
  //           type: Sequelize.STRING
  //         },
  //         createdAt: {
    //           allowNull: false,
    //           type: Sequelize.DATE
    //         },
//         updatedAt: {
  //           allowNull: false,
  //           type: Sequelize.DATE
//         }
//       });
//       done();
//     } catch (err) {
//       done(err);
//     }
//   })

describe("Service router test", () => {
    let access_token = '';
    const data = {
        username: "ananha",
        email: "ananha@mail.com",
        password: "ananhart"
    }
    
    async function getToken() {
      let userData = {email: 'amin@wd.com', password: 'alhamdu', username: 'admin'}
      await Transporter.create(userData)
          .then((res) => {
              return Transporter.findOne({where:{email:userData.email}})
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
      done()
      console.log(access_token, 'initjal')
      queryInterface.bulkDelete("Services")
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
                  service_picture: "paket hemmat picture",
                  vehicle: "Avanza",
                  price: 10000000,
                  tracking_log: "Gudang",
                  status: "proses"
              })
              .end((err, res) => {
                  if(err) return done(err)
                  else {
                      const {body, status} = res
                      expect(status).toBe(201)
                      expect(body).not.toBeNull()
                      done()
                  }
              })
          })
      })
      describe("POST/service create service by transporter", () => {
          it("error authentication failed", (done) => {
              request(app)
              .post('/service')
              .send({
                  service_name: "paket hemat",
                  service_picture: "paket hemmat picture",
                  vehicle: "Avanza",
                  price: 10000000,
                  tracking_log: "Gudang",
                  status: "proses"
              })
              .end((err, res) => {
                  if(err) return done(err)
                  else {
                      const {body, status} = res
                      expect(status).toBe(400)
                      expect(body).not.toBeNull()
                      expect(body).toEqual(["Authentication failed"])
                      done()
                  }
              })
          })
      })
  })