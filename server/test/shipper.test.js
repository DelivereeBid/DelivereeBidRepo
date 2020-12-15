const request = require("supertest");
const app = require("../app");
const { generateToken, verifyToken } = require("../helper/jwt");
const { Shipper, sequelize } = require("../models");
const { queryInterface } = sequelize;

describe("Shipper Router Test", () => {

  let access_token = '';
  let shipperId = 0;
  let decoded = {};

  async function getToken() {
    let userData = {email: 'yanto@mail.com', password: 'alhamdu', username: 'admin'}
    await Shipper.create(userData)
        .then((res) => {
            return Shipper.findOne({where:{email:userData.email}})
        })
        .then((res) => {
          shipperId = res.id;
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

  
  const shipper_data = {
    username: "Zalada",
    email: "zalada@mail.com",
    password: "halo123456",
  };

  const shipper_data2 = {
    username: "Tutuplapak",
    email: "tutuplapak@mail.com",
    password: "halo123456",
  };

  describe("POST/register - register for shipper", () => {
    beforeAll((done) => {
      Shipper.create(shipper_data2)
        .then((res) => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  
    afterAll((done) => {
      queryInterface
        .bulkDelete("Shippers", {})
        .then(() => done())
        .catch((err) => done(err));
    });

    it("201 Success register - should create new Shipper", (done) => {
      request(app)
        .post("/shipper/register")
        .send(shipper_data)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(201);
          expect(body).toHaveProperty("id", expect.any(Number));
          expect(body).toHaveProperty("username", 'Zalada');
          expect(body).toHaveProperty("email", 'zalada@mail.com');
          done();
        });
    });

    it("400 Failed Register - should return error if name is empty string", (done) => {
      request(app)
        .post("/shipper/register")
        .send({
          username: "",
          email: "zalada@mail.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Username is required"]);
          // expect(body).toBe(["Username is required"])
          done();
        });
    });

    it("400 Failed Register - should return error if key is null", (done) => {
      request(app)
        .post("/shipper/register")
        .send({
          email: "zalada@mail.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Username is required"]);
          done();
        });
    });

    it("400 Failed register - should return error if email is null", (done) => {
      request(app)
        .post("/shipper/register")
        .send({
          username: "Zalada",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Email is required"]);
          done();
        });
    });

    it("400 Failed register - should return error if email is empty string", (done) => {
      request(app)
        .post("/shipper/register")
        .send({
          username: "Zalada",
          email: "",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Invalid format email", "Email is required"]);
          done();
        });
    });

    it("400 Failed register - should return error if password is empty string", (done) => {
      request(app)
        .post("/shipper/register")
        .send({
          username: "Zalada",
          email: "zalada@mail.com",
          password: "",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Password is required", 
          "Password length minimum 4 character and maximum 10 character"]);
          done();
        });
    });

    it("400 Failed register - should return error if password is null", (done) => {
      request(app)
        .post("/shipper/register")
        .send({
          username: "Zalada",
          email: "zalada@mail.com",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Password is required"]);
          done();
        });
    });

    it("400 Failed register - should return error if email have invalid format", (done) => {
      request(app)
        .post("/shipper/register")
        .send({
          username: "Zalada",
          email: "zalada.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Invalid format email"]);
          done();
        });
    });

    it("400 Failed register - should return error if email already in used", (done) => {
      request(app)
        .post("/shipper/register")
        .send(shipper_data)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          console.log(body, 'www')
          expect(body).toEqual(["Email must be unique"]);
          done();
        })
      });
  });

  describe("POST/login - shipper authentication process", () => {
    beforeAll((done) => {
      Shipper.create(shipper_data)
        .then((_) => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    afterAll((done) => {
      queryInterface
        .bulkDelete("Shippers", {})
        .then(() => done())
        .catch((err) => done(err));
    });

    it("200 Success Login - should return access_token", (done) => {
      request(app)
        .post("/shipper/login")
        .send(shipper_data)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toHaveProperty("access_token", expect.any(String));
          done();
        });
    });

    it("400 Failed Login - should return error if email/password invalid", (done) => {
      request(app)
        .post("/shipper/login")
        .send({
          email: "dalaza@mail.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Invalid email or password"]);
          done();
        });
    });
  });

  describe("GET/shipper - shipper find all process", () => {
    beforeAll(async (done) => {
      await getToken();
      done();     
    })
    
    afterAll(async (done) => {
      queryInterface.bulkDelete("Shippers")
      .then(() => {
        done();
      });
    })
    it("200 Success GET shipper - should return list of shippers", (done) => {
      request(app)
        .get("/shipper")
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          done();
        });
    });
    it("404 Failed GET shipper by id - should return shipper", (done) => {
      request(app)
        .get("/shipper/1")
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(404);
          expect(body).toEqual(["Shipper not found"])
          done();
        });
    });
    it("200 Success GET shipper by id - should return shipper", (done) => {
      request(app)
        .get(`/shipper/${shipperId}`)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toHaveProperty("email", "yanto@mail.com")
          expect(body).toHaveProperty("username", "admin")
          expect(body).not.toBeNull()
          done();
        });
    });
  })

  describe("PUT/shipper - update shipper data", () => {
    
    beforeAll(async (done) => {
      await getToken();
      done();     
    })
    
    afterAll(async (done) => {
      queryInterface.bulkDelete("Shippers")
      .then(() => {
        done();
      });
    })
    
    it("200 Success PUT shipper - should update shipper information", (done) => {
      request(app)
        .put(`/shipper/${shipperId}`)
        .send({
          username: 'Japra',
          wallet: 0
        })
        .set('access_token', access_token)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toEqual({msg: "Success update profile"})
          done();
        });
    });
    it("400 Error PUT shipper wallet - should return error if wallet is less than zero", (done) => {
      request(app)
        .put(`/shipper/${shipperId}`)
        .send({
          username: 'Japra',
          wallet: -69000
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
        .put(`/shipper/${shipperId}`)
        .set('access_token', access_token)
        .send({
          username: '',
          wallet: 69000
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
        .put(`/shipper/${shipperId}`)
        .send({
          username: 'Japra',
          wallet: 69000
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toEqual(["Authentication failed"])
          done();
        });
    });
    it("404 Error PUT id not found - should return error if shipper id is not authorized", (done) => {
      request(app)
        .put(`/shipper/69606069`)
        .set('access_token', access_token)
        .send({
          username: 'Japra',
          wallet: 69000
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(403);
          expect(body).toEqual(["Not authorized"])
          done();
        });
    });
  })
});
