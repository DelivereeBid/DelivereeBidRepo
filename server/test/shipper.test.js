const request = require("supertest");
const app = require("../app");
const { Shipper, sequelize } = require("../models");
const { queryInterface } = sequelize;

describe("Shipper Router Test", () => {
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
          expect(body).toHaveProperty("message", "Username is required");
          done();
        });
    });

    it("400 Failed Register - should return error if name is null", (done) => {
      request(app)
        .post("/shipper/register")
        .send({
          email: "zalada@mail.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(500);
          expect(body).toHaveProperty("message", "Internal server error");
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
          expect(status).toBe(500);
          expect(body).toHaveProperty("message", "Internal server error");
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
          expect(body).toHaveProperty("message", "Email is required");
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
          expect(body).toHaveProperty("message", "Password is required");
          done();
        });
    });

    // it("400 Failed register - should return error if password is null", (done) => {
    //   request(app)
    //     .post("/shipper/register")
    //     .send({
    //       username: "Zalada",
    //       email: "zalada@mail.com",
    //     })
    //     .then((response) => {
    //       const { body, status } = response;
    //       expect(status).toBe(400);
    //       expect(body).toHaveProperty("message", "Password cannot be empty");
    //       done();
    //     });
    // });

    // it("400 Failed register - should return error if email have invalid format", (done) => {
    //   request(app)
    //     .post("/shipper/register")
    //     .send({
    //       nama: "Zalada",
    //       email: "zalada.com",
    //       password: "halo123456",
    //     })
    //     .then((response) => {
    //       const { body, status } = response;
    //       expect(status).toBe(400);
    //       expect(body).toHaveProperty("message", "Invalid email format");
    //     });
    // });

    // it("400 Failed register - should return error if email already in used", (done) => [
    //   request(app)
    //     .post("/shipper/register")
    //     .send({
    //       nama: "Tutuplapak",
    //       email: "tutuplapak@mail.com",
    //       password: "halo123456",
    //     })
    //     .then((response) => {
    //       const { body, status } = response;
    //       expect(status).toBe(400);
    //       expect(body).toHaveProperty(
    //         "message",
    //         "tutuplapak@mail.com already exist"
    //       );
    //       done();
    //     }),
    // ]);
  });

//   describe("POST/login - shipper authentication process", () => {
//     beforeAll((done) => {
//       Shipper.create(shipper_data)
//         .then((_) => {
//           done();
//         })
//         .catch((err) => {
//           done(err);
//         });
//     });

//     afterAll((done) => {
//       queryInterface
//         .bulkDelete("Shippers", {})
//         .then(() => done())
//         .catch((err) => done(err));
//     });

//     it("200 Success Login - should return access_token", (done) => {
//       request(app)
//         .post("/shipper/login")
//         .send(shipper_data)
//         .then((response) => {
//           const { body, status } = response;
//           expect(status).toBe(200);
//           expect(body).toHaveProperty("access_token", expect.any(String));
//           done();
//         });
//     });

//     it("400 Failed Login - should return error if email/password invalid", (done) => {
//       request(app)
//         .post("/shipper/login")
//         .send({
//           email: "dalaza@mail.com",
//           password: "halo123456",
//         })
//         .then((response) => {
//           const { body, status } = response;
//           expect(status).toBe(400);
//           expect(body).toHaveProperty("message", "Invalid email/password");
//           done();
//         });
//     });
//   });
});
