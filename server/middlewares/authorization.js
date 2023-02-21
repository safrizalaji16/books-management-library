const { Book } = require("../models");

module.exports = {
  async authorizationOwner(req, res, next) {
    try {
      const { id } = req.params;
      const AuthorId = req.User.id;
      const book = await Book.findByPk(id);

      if (book.AuthorId !== AuthorId) {
        throw {
          name: "Forbidden",
        };
      }

      next();
    } catch (err) {
      next(err);
    }
  },
};
