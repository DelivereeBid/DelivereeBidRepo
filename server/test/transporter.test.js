const request = require("supertest");
const app = require("../app");
const { Transporter, sequelize } = require("../models");
const { queryInterface } = sequelize;

describe("Transporter Router Test", () => {
  const transporter_data = {
    name: "HDL",
    email: "hdl@mail.com",
    password: "halo123456",
  };

  const transporter_data2 = {
    name: "PUS",
    email: "pus@mail.com",
    password: "halo123456",
  };

  describe("POST/register - register for transporter", () => {
    beforeAll((done) => {
      Transporter.create(transporter_data2)
        .then((_) => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    afterAll((done) => {
      queryInterface
        .bulkDelete("Transporter", {})
        .then(() => done())
        .catch((err) => done(err));
    });

    it("201 Success register - should create new Transporter", (done) => {
      request(app)
        .post("/transporter/register")
        .send(transporter_data)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(201);
          expect(body).toHaveProperty("id", expect.any(Number));
          expect(body).toHaveProperty("name", expect(transporter_data.name));
          expect(body).toHaveProperty("email", expect(transporter_data.email));
          done();
        });
    });

    it("400 Failed register - should return error if name is empty", (done) => {
      request(app)
        .post("/transporter/register")
        .send({
          name: "",
          email: "hdl@mail.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(body).toHaveProperty("message", "Name cannot be empty");
          done();
        });
    });

    it("400 Failed register - should return error if name is null", (done) => {
      request(app)
        .post("/transporter/register")
        .send({
          email: "hdl@mail.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(body).toHaveProperty("message", "Name cannot be empty");
          done();
        });
    });

    it("400 Failed register - should return error if email is null", (done) => {
      request(app)
        .post("/transporter/register")
        .send({
          name: "HDL",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Email cannot be empty");
          done();
        });
    });

    it("400 Failed register - should return error if email is empty string", (done) => {
      request(app)
        .post("/transporter/register")
        .send({
          name: "HDL",
          email: "",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Invalid email format");
          done();
        });
    });

    it("400 Failed register - should return error if password is empty string", (done) => {
      request(app)
        .post("/transporter/register")
        .send({
          name: "HDL",
          email: "hdl@mail.com",
          name: "",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Password cannot be empty");
          done();
        });
    });

    it("400 Failed register - should return error if password is null", (done) => {
      request(app)
        .post("/transporter/register")
        .send({
          name: "HDL",
          email: "hdl@mail.com",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Password cannot be empty");
        });
    });

    it("400 Failed register - should return error if email have invalid format", (done) => {
      request(app)
        .post("/transporter/register")
        .send({
          name: "HDL",
          email: "hdl.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Invalid email format");
        });
    });

    it("400 Failed register - should return error if email already in used", (done) => [
      request(app)
        .post("/transporter/register")
        .send({
          name: "PUS",
          email: "pus@mail.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "pus@mail.com already exist");
          done();
        }),
    ]);
  });

  describe("POST/login - transporter authentication process", () => {
    beforeAll((done) => {
      Transporter.create(transporter_data)
        .then((_) => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    afterAll((done) => {
      queryInterface
        .bulkDelete("Transporter", {})
        .then(() => done())
        .catch((err) => done(err));
    });

    it("200 Success Login - should return access_token", (done) => {
      request(app)
        .post("/transporter/login")
        .send(transporter_data)
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
          email: "dhal@mail.com",
          password: "halo123456",
        })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Invalid email/password");
          done();
        });
    });
  });
});
