const router = require("express").Router();
const pluginInfoRouter = require("./plugin-info");
const giphy = require("./giphy");
const googleDrive = require("./googleDrive");

module.exports = () => {
  router.use("/giphy", giphy());
  router.use("/googleDrive", googleDrive());
  router.use(pluginInfoRouter());
  return router;
};
