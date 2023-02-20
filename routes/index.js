const router = require("express").Router();
const authorRouter = require("./author");
const categoryRouter = require("./category");
const bookRouter = require("./book");

router
  .use(authorRouter)
  .use("/categories", categoryRouter)
  .use("/books", bookRouter);

module.exports = router;
