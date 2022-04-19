//imports
var express = require("express");
var app = express();
var path = require("path");
//imports

//configs
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
//configs

//importando rotas
const projetoRoute = require("./routes/projetoRoute");
const desenvolvedorRoute = require("./routes/desenvolvedorRoute");
//importando rotas

app.get("/", function (req, res) {
  res.render("index.ejs", {});
});

app.use("/", projetoRoute);
app.use("/", desenvolvedorRoute);

app.listen("3000", function () {
  console.log("O servidor foi iniciado na porta 3000");
});
