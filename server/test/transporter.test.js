const request = require("supertest");
const app = require("../app");
const { Transporter, sequelize } = require("../models");
const { queryInterface, Sequelize } = sequelize;


const transporter_data = {
  username: "HDL",
  email: "asdf@mail.com",
  password: "halo123456",
};

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
          email: "asd@mail.com",
          password: "halo123456",
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
        .send()
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toEqual(["Invalid email or password"]);
          done();
        });
    });
  });
});
