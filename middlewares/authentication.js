const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

module.exports = {
  async authentication(req, res, next) {
    try {
      const { access_token } = req.headers;

      if (!access_token) {
        throw {
          name: "Unauthorized",
        };
      }

      const payload = verifyToken(access_token);
      const user = await User.findByPk(payload.id);

      if (!user) {
        throw {
          name: "Unauthorized",
        };
      }

      req.User = {
        id: user.id,
        email: user.email,
      };

      next();
    } catch (err) {
      next(err);
    }
  },
};
