const Controller = require("../controllers/author");

const router = require("express").Router();

router
  .post("/", Controller.createAuthor)
  .get("/", Controller.readAllAuthors)
  .get("/:id", Controller.readOneAuthor)
  .put("/:id", Controller.updateAuthor)
  .delete("/:id", Controller.deleteAuthor);

module.exports = router;
