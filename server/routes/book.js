const Controller = require("../controllers/book");
const { authorizationOwner } = require("../middlewares/authorization");

const router = require("express").Router();

router
  .post("/", Controller.createBook)
  .get("/", Controller.readAllBooks)
  .get("/:id", Controller.readOneBook)
  .use("/:id", authorizationOwner)
  .put("/:id", Controller.updateBook)
  .delete("/:id", Controller.deleteBook);

module.exports = router;
