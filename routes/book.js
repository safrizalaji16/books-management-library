const Controller = require("../controllers/book");

const router = require("express").Router();

router
  .post("/", Controller.createBook)
  .get("/", Controller.readAllBooks)
  .get("/:id", Controller.readOneBook)
  .put("/:id", Controller.updateBook)
  .delete("/:id", Controller.deleteBook);

module.exports = router;
