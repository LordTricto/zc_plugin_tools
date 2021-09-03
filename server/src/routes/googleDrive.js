const router = require("express").Router();
const googleDrive = require("../controllers/googleDrive");

module.exports = function () {
  router.get("/getFilesList", googleDrive.getFilesList);

  return router;
};
