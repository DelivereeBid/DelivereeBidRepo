const request = require("supertest");
const app = require("../app");
const { generateToken, verifyToken } = require("../helper/jwt");
const { Transporter, sequelize } = require("../models");
const { queryInterface, Sequelize } = sequelize;


const transporter_data = {
  username: "HDLA",
  email: "asdf@mail.com",
  password: "halo123456",
  vehicle: 'xenia'
};

  let access_token = '';
  let transporterId = 0;
  let decoded = {};

  async function getToken() {
    let userData = {email: 'japri@mail.com', password: 'alhamdu', username: 'admin', vehicle: 'avanza'}
    await Transporter.create(userData)
        .then((res) => {
            return Transporter.findOne({where:{email:userData.email}})
        })
        .then((res) => {
          transporterId = res.id;
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

afterAll(async (done) => {
  try {
    await queryInterface.dropTable("Transporters");
    await queryInterface.createTable("Transporters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      profile_picture: {
        type: Sequelize.STRING,
      },
      wallet: {
        type: Sequelize.INTEGER,
      },
      vehicle: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    done();
  } catch (err) {
    done(err);
  }
});
describe("Transporter Router Test", () => {
  describe("POST/register - register for transporter", () => {
    it("201 Success register - should create new Transporter", (done) => {
      request(app)
        .post("/transporter/register")
        .send(transporter_data)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(201);
          expect(body).toHaveProperty("id", expect.any(Number));
          expect(body).toHaveProperty("username", transporter_data.username);
          expect(body).toHaveProperty("email", transporter_data.email);
          expect(body).toHaveProperty("vehicle", transporter_data.vehicle);
          done();
        });
    });

    it("400 Failed register - should return error if username is empty", (done) => {
      let errors = ["Username is required"];
      request(app)
        .post("/transporter/register")
        .send({
          username: "",
          email: "hdl@mail.com",
          password: "halo123456",
          vehicle: 'xenia'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(errors);
          done();
        });
    });

    it("400 Failed register - should return error if username is null", (done) => {
      let errors = ["Username is required"];
      request(app)
        .post("/transporter/register")
        .send({
          email: "hdlad@mail.com",
          password: "halo123456",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(errors);
          done();
        });
    });

    it("400 Failed register - should return error if email is null", (done) => {
      let errors = ["Email is required"];
      request(app)
        .post("/transporter/register")
        .send({
          username: "HDL",
          password: "halo123456",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(errors);
          done();
        });
    });

    it("400 Failed register - should return error if email is empty string", (done) => {
      let errors = ["Invalid format email", "Email is required"];
      request(app)
        .post("/transporter/register")
        .send({
          username: "HDL",
          email: "",
          password: "halo123456",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(errors);
          done();
        });
    });

    it("400 Failed register - should return error if password is empty string", (done) => {
      let errors = ["Password is required"];
      request(app)
        .post("/transporter/register")
        .send({
          username: "HDL",
          email: "hdl@mail.com",
          name: "",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(errors);
          done();
        });
    });

    it("400 Failed register - should return error if password is null", (done) => {
      let errors = ["Password is required"];
      request(app)
        .post("/transporter/register")
        .send({
          username: "HDL",
          email: "hdl@mail.com",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(errors);
          done();
        });
    });

    it("400 Failed register - should return error if email have invalid format", (done) => {
      request(app)
        .post("/transporter/register")
        .send({
          username: "HDL",
          email: "hdl.com",
          password: "halo123456",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Invalid format email"])
          done()
        });
    });

    it("400 Failed register - should return error if email already in used", (done) => [
      request(app)
        .post("/transporter/register")
        .send({
          username: "PUS",
          email: "asdf@mail.com",
          password: "halo123456",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Email must be unique"]);
          done();
        }),
    ]);
  });

  describe("POST/login - transporter authentication process", () => {
    it("200 Success Login - should return access_token", (done) => {
      request(app)
        .post("/transporter/login")
        .send({
          username: "HDLA",
          email: "asdf@mail.com",
          password: "halo123456",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toHaveProperty("access_token", expect.any(String));
          done();
        });
    });

    it("400 Failed Login - should return error if email/password invalid", (done) => {
      request(app)
        .post("/transporter/login")
        .send({
          email: "asd@mail.com",
          password: "halo123456",
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Invalid email or password"]);
          done();
        });
    });
    it("400 Failed Login - should return error if email/password null", (done) => {
      request(app)
        .post("/transporter/login")
        .send({
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Invalid email or password"]);
          done();
        });
    });
  });

  describe("GET/transporter - transporter findAll process", () => {
    it("200 Success GET transporter - should return list of transporters", (done) => {
      request(app)
        .get("/transporter")
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          done();
        });
    });
  })
  
  describe("GET/transporter/:id - transporter findBy id process", () => {
    it("200 Success GET transporter - should return list of transporters", (done) => {
      request(app)
        .get("/transporter/1")
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).not.toBeNull()
          done();
        });
    });
    it("404 Failed GET transporter - should return not fund", (done) => {
      request(app)
        .get("/transporter/0")
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(404);
          expect(body).toEqual(["Transporter not found"])
          done();
        });
    });
  })
  
  describe("PUT/transporter - update transporter data", () => {
    
    beforeAll(async (done) => {
      await getToken();
      done();     
    })
    
    afterAll(async (done) => {
      queryInterface.bulkDelete("Transporters")
      .then(() => {
        done();
      });
    })
    
    it("200 Success PUT transporter - should update transporter information", (done) => {
      request(app)
        .put(`/transporter/${transporterId}`)
        .send({
          username: 'Japra',
          wallet: 0,
          vehicle: 'subaru'
        })
        .set('access_token', access_token)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toEqual({transporter: expect.any(Array) ,msg: "Success update profile"})
          done();
        });
    });
    it("400 Error PUT transporter wallet - should return error if wallet is less than zero", (done) => {
      request(app)
        .put(`/transporter/${transporterId}`)
        .send({
          username: 'Japra',
          wallet: -69000,
          vehicle: 'subaru'
        })
        .set('access_token', access_token)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Wallet cannot minus"])
          done();
        });
    });

    it("400 Error PUT username - should return error if username is empty string", (done) => {
      request(app)
        .put(`/transporter/${transporterId}`)
        .set('access_token', access_token)
        .send({
          username: '',
          wallet: 69000,
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Username is required"])
          done();
        });
    });

    it("401 Error PUT authentication - should return error if access_token is empty", (done) => {
      request(app)
        .put(`/transporter/${transporterId}`)
        .send({
          username: 'Japra',
          wallet: 69000,
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(["Authentication failed"])
          done();
        });
    });

    it("404 Error PUT id not found - should return error if transporter id is not authorized", (done) => {
      request(app)
        .put(`/transporter/69606069`)
        .set('access_token', access_token)
        .send({
          username: 'Japra',
          wallet: 69000,
          vehicle: 'subaru'
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(403);
          expect(body).toEqual(["Not authorized"])
          done();
        });
    });
  })
  // describe("PATCH /transporter/:id - update wallet only", () => {
  //   it("200 success update wallet", (done) => {
  //     request(app)
  //     .patch(`transporter/${transporterId}`)
  //     .send({wallet: 500000})
  //     .then((response) => {
  //       const {body, status} = response
  //       expect(status).toBe(200)
  //       expect(body).toEqual(["Success update wallet"])
  //       done()
  //     })
  //   })
  // })
});
