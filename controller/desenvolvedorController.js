var Desenvolvedor = require("../model/Desenvolvedor");

function listarTudo(req, res) {
  Desenvolvedor.find({}).then(function (docs) {
    res.render("desenvolvedor/list.ejs", { Desenvolvedores: docs });
  });
}

function listarFiltro(req, res) {
  if (req.body.tipo == "nome") {
    Desenvolvedor.find({ nome: new RegExp(req.body.pesquisa, "i") }).then(
      function (docs) {
        res.render("desenvolvedor/list.ejs", { Desenvolvedores: docs });
      }
    );
  } else {
    Desenvolvedor.find({ email: new RegExp(req.body.pesquisa, "i") }).then(
      function (docs) {
        res.render("desenvolvedor/list.ejs", { Desenvolvedores: docs });
      }
    );
  }
}

function abreAdd(req, res) {
  res.render("desenvolvedor/add.ejs", {});
}

function add(req, res) {
  var desenvolvedor = new Desenvolvedor({
    nome: req.body.nome,
    email: req.body.email,
    area: req.body.area,
    endereco: req.body.endereco,
    senha: req.body.senha,
  });
  if (req.file.filename != "") {
    desenvolvedor.foto = req.file.filename;
  }

  desenvolvedor.save(function (err, docs) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/desenvolvedor/");
    }
  });
}

function abreEdit(req, res) {
  Desenvolvedor.findById(req.params.id).then(function (docs) {
    console.log(docs);
    res.render("desenvolvedor/edit.ejs", { Desenvolvedor: docs });
  });
}

function edita(req, res) {
  Desenvolvedor.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      email: req.body.email,
      area: req.body.area,
      senha: req.body.senha,
      foto: req.file.filename,
    },
    function (err, docs) {
      if (err) {
        res.send("Aconteceu um erro:" + err);
      } else {
        res.redirect("/desenvolvedor/");
      }
    }
  );
}

function deleta(req, res) {
  Desenvolvedor.findByIdAndDelete(req.params.id, function (err, doc) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/desenvolvedor/");
    }
  });
}

module.exports = {
  listarTudo,
  listarFiltro,
  abreAdd,
  add,
  abreEdit,
  edita,
  deleta,
};
