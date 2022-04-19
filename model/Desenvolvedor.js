var conexao = require("../config/database");

var DesenvolvedorSchema = conexao.Schema({
  nome: { type: "String" },
  email: { type: "String" },
  area: { type: "String" },
  endereco: { type: "String" },
  foto: { type: "String" },
  projeto: { type: conexao.Schema.Types.ObjectId },
});

module.exports = conexao.model("Desenvolvedor", DesenvolvedorSchema);
