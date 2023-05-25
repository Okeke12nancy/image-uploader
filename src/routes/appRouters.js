const uploadRouter = require("./uploadRoutes");
const imageRouter = require("./imageRoutes");

const basePath = "/api/v1";

const path = (app) => {
  app.use(`${basePath}/upload`, uploadRouter);
  app.use(`${basePath}/image`, imageRouter);
};

module.exports = path;
