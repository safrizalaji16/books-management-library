const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw {
          name: "Error email or password",
        };
      }

      const findUser = await User.findOne({ where: { email } });

      if (!findUser || !comparePassword(password, findUser.password)) {
        throw {
          name: "Error email or password",
        };
      }

      const access_token = createToken({ id: findUser.id });

      res.status(200).json({ access_token, name: findUser.name });
    } catch (err) {
      next(err);
    }
  }
  static async register(req, res, next) {
    try {
      const { email, password, name } = req.body;
      const newUser = await User.create({
        email,
        password,
        name,
      });

      res.status(201).json({
        id: newUser.id,
        email: newUser.email,
        msg: "Register Success!",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
