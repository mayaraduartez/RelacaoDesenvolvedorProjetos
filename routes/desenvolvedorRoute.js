const express = require("express");
const Router = express.Router();
var upload = require("../config/multer.js");
var desenvolvedorController = require("../controller/desenvolvedorController");

Router.get("/desenvolvedor/", desenvolvedorController.listarTudo);

Router.post("/desenvolvedor/", desenvolvedorController.listarFiltro);

Router.get("/desenvolvedor/add", desenvolvedorController.abreAdd);

Router.post(
  "/desenvolvedor/add",
  upload.single("foto"),
  desenvolvedorController.add
);

Router.get("/desenvolvedor/edt/:id", desenvolvedorController.abreEdit);

Router.post(
  "/desenvovledor/edt/:id",
  upload.single("foto"),
  desenvolvedorController.edita
);

Router.get("/desenvolvedor/del/:id", desenvolvedorController.deleta);

module.exports = Router;
