const { Book } = require("../models");
class Controller {
  static async readAllBooks(req, res, next) {
    try {
      const books = await Book.findAll();

      res.status(200).json(books);
    } catch (err) {
      next(err);
    }
  }
  static async createBook(req, res, next) {
    try {
      const { title, description, CategoryId } = req.body;

      const newBook = await Book.create({
        title,
        description,
        AuthorId: req.User.id,
        CategoryId,
      });

      res.status(201).json(newBook);
    } catch (err) {
      next(err);
    }
  }
  static async readOneBook(req, res, next) {
    try {
      const { id } = req.params;

      const book = await Book.findByPk(id);

      if (!book) {
        throw {
          name: "Book Not Found",
        };
      }

      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  }
  static async updateBook(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description, CategoryId } = req.body;
      console.log(id);
      const book = await Book.findByPk(id);

      if (!book) {
        throw {
          name: "Book Not Found",
        };
      }

      await Book.update({ title, description, CategoryId }, { where: { id } });

      res.status(201).json({
        msg: "Success to update Book",
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteBook(req, res, next) {
    try {
      const { id } = req.params;
      const book = await Book.findByPk(id);

      if (!book) {
        throw {
          name: "Book Not Found",
        };
      }

      await Book.destroy({
        where: { id },
      });

      res.status(200).json({
        msg: "Book success to delete",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
