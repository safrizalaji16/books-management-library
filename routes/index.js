const router = require("express").Router();
const userRouter = require("./user");
const categoryRouter = require("./category");
const bookRouter = require("./book");
const { authentication } = require("../middlewares/authentication");

router
  .use(userRouter)
  .use(authentication)
  .use("/categories", categoryRouter)
  .use("/books", bookRouter);

module.exports = router;
