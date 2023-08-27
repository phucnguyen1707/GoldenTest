const productRouter = require("./Productroute");

function route(app) {
  app.use("/api/v1/products", productRouter);
}

module.exports = route;
