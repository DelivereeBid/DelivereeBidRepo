const { Service, Transporter } = require("../models");

class ServiceController {
  static findAll(req, res, next) {
    Service.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Transporter,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt" ,"wallet"],
        },
      },
    })
      .then((service) => {
        res.status(200).json(service);
      })
      .catch((err) => next(err));
  }
  static getById(req, res, next) {
    const { id } = req.params;
    Service.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      include: {
        model: Transporter,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "wallet"],
        },
      },
    })
      .then((service) => {
        res.status(200).json(service);
      })
      .catch((err) => next(err));
  }
  static createService(req, res, next) {
    const {
      service_name,
      file,
      vehicle,
      price,
      tracking_log,
    } = req.body;
    Service.create({
      service_name,
      service_picture: file,
      vehicle,
      price,
      tracking_log,
      status: "Packing",
      TransporterId: req.loggedIn.id,
    })
      .then((service) => {
        res.status(201).json(service);
      })
      .catch((err) => next(err));
  }

  static updateService(req, res, next) {
    const { id } = req.params;
    const {
      service_name,
      file,
      vehicle,
      price,
      tracking_log,
      status,
    } = req.body;
    Service.update(
      { service_name, service_picture: file, vehicle, price, tracking_log, status },
      {
        where: {
          id: +id,
        },
      }
    )
      .then((service) => {
        if(service[0] === 0) throw {msg: "Failed update service"}
        else {
          res.status(200).json({ service: service, msg: "Success update service" });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static deleteService(req, res, next){
    const {id} = req.params
    Service.destroy({
      where: {id}
    }).then(service => {
      res.status(200).json({msg: "Success delete service"})
    }).catch(err => next(err))
  }
}

module.exports = ServiceController;
