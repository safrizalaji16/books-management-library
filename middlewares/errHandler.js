module.exports = {
  errHandler(err, req, res, next) {
    console.log(err);
    let status = 500;
    let msg = "Internal Server Error";

    switch (err.name) {
      case "SequelizeUniqueConstraintError":
      case "SequelizeValidationError":
        status = 400;
        msg = err.errors.map((el) => el.message)[0];
        break;

      case "JsonWebTokenError":
      case "Unauthorized":
        status = 401;
        msg = "Please Login First";
        break;

      case "Author Not Found":
        status = 404;
        msg = "Author Not Found";
        break;

      case "Category Not Found":
        status = 404;
        msg = "Category Not Found";
        break;

      case "Book Not Found":
        status = 404;
        msg = "Book Not Found";
        break;

      case "Error email or password":
        status = 401;
        msg = "Error invalid email or password";
        break;

      case "Forbidden":
        status = 403;
        msg = "You have no access";
        break;
    }

    res.status(status).json({ msg });
  },
};
